const bookedSchema = require("../models/book");
const registerModel = require("../models/register");
//Importing bcrypt to hash the password.
const bcrypt = require("bcryptjs");
//Importing nodemailer for sending mail.
const nodemailer = require("nodemailer");

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
    const { token, banquetName } = req.params;
    console.log(banquetName);
    //Decoding the token with secret key and token.
    let decoded = await jwt.verify(token, "jwtsecret");

    const { userId, shift, date, guest, type } = decoded;

    const { breakfast, dinner, desert } = req.body;

    if (breakfast == null || dinner == null || desert == null) {
      return res.json("Unsucessfull");
    }

    await bookedSchema.create({
      bookUserId: userId,
      banquetName: banquetName,
      shift: shift,
      date: date,
      guest: guest,
      type: type,
      starters: breakfast,
      mainCourse: dinner,
      desert: desert,
    });
    const adminData = await registerModel.findOne({ userId: userId });

    //Sending email to created banquet person.

    //Creating a medium to send email.
    let transporter = nodemailer.createTransport({
      //Domain name.
      service: "hotmail",
      auth: {
        //Your email
        user: `${process.env.EMAIL}`,
        //Your password
        pass: `${process.env.PASSWORD}`,
      },
    });

    // //Contents of email.
    // let mailConfiguration = await transporter.sendMail({
    //   from: `${process.env.EMAIL}`,
    //   to: `${adminData.email}`,
    //   subject: "Banquet Booked",
    //   html: `<h3>You have booked the banquet with following details. Thank you for booking</h3>
    //   <p>
    //   Name of Banquet: ${banquetName}
    //   <br>
    //   Shift: ${shift}
    //   <br>
    //   Date: ${date}
    //   <br>
    //   Total no. of Guest Guest: ${guest}
    //   <br>
    //   type: ${type}
    //   <br>
    //   Starters: ${breakfast}
    //   <br>
    //   MainCourse: ${dinner}
    //   <br>
    //   Desert: ${desert}
    //   <br>
    //   </p>`,
    // });

    // //Sending message to user email for verification.
    // transporter.sendMail(mailConfiguration, function (error, info) {
    //   //If not successful.
    //   if (error) {
    //     throw new CustomAPIError("Email not send");
    //   }
    //   //If successful.
    //   console.log("Sent: " + info.response);
    // });
    res.send("Booked");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { filterBanquet, bookBanquet, createReservation };
