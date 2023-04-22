const bookedSchema = require("../models/book");
//Importing bcrypt to hash the password.
const bcrypt = require("bcryptjs");

//Importing jwt to create a token.
const jwt = require("jsonwebtoken");

const filterBanquet = async (req, res) => {
  try {
    const { shift, date, guest, type } = req.body;
    console.log(shift, date, guest, type);
    if (shift == null || date == null || guest == null || type == null) {
      return res.send("Please fill the values");
    }

    res.redirect("http://localhost:3000/banquet");
  } catch (error) {
    console.log(error);
  }
};

const createReservation = async (req, res) => {
  try {
    const { shift, date, guest, type } = req.body;
    if (shift && date && guest && type) {
      //Creating a token.
      const token = jwt.sign(
        { userId: req.signedCookies.userId, shift, date, guest, type },
        "jwtsecret",
        {
          expiresIn: "200000s",
        }
      );
      return res.json({ data: token, Sucess: "Sucess" });
    }
    res.json({ Sucess: "Unsucessfull" });
  } catch (error) {
    console.log(error);
  }
};

const bookBanquet = async (req, res) => {
  try {
    //Destructuring the object.
    const { token } = req.params;
    //Decoding the token with secret key and token.
    let decoded = await jwt.verify(token, "jwtsecret");

    const { userId, shift, date, guest, type } = decoded;

    const { breakfast, dinner, desert } = req.body;

    if (breakfast == null || dinner == null || desert == null) {
      return res.json("Unsucessfull");
    }

    await bookedSchema.create({
      bookUserId: userId,
      shift: shift,
      date: date,
      guest: guest,
      type: type,
      starters: breakfast,
      mainCourse: dinner,
      desert: desert,
    });

    res.send("Booked");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { filterBanquet, bookBanquet, createReservation };
