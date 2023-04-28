const banquetModel = require("../models/banquet");

const menuSchema = require("../models/menu");

//Importing bcrypt to hash the password.
const bcrypt = require("bcryptjs");

//Importing jwt to create a token.
const jwt = require("jsonwebtoken");

const createMenu = async (req, res) => {
  try {
    //Destructing array.
    const [breakfast, dinner, desert, price] = req.body.menu;
    const { token } = req.params;
    //Decoding the token with secret key and token.
    let decoded = await jwt.verify(token, "jwtsecret");
    console.log(decoded);
    if (breakfast && dinner && desert && price) {
      //createing banquet.
      const createBanquet = await banquetModel.create({
        ...decoded,
      });
      //Creating menu.
      await menuSchema.create({
        userId: req.signedCookies.userId,
        banquetId: createBanquet._id,
        breakfast,
        dinner,
        desert,
        price,
      });
      return res.status(200).json("Sucess");
    }
    res.json("Unsucessfull");
  } catch (error) {
    console.log(error);
  }
};

const getMenu = async (req, res) => {
  try {
    const { banquetId } = req.params;
    const menu = await menuSchema.findOne({ banquetId: banquetId });
    res.status(200).json(menu);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createMenu, getMenu };
