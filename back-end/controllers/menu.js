const menuSchema = require("../models/menu");

const createMenu = async (req, res) => {
  try {
    const [breakfast, dinner, desert, price] = req.body.menu;
    console.log(req.body);

    // const findUserIdExists = await menuSchema.find({
    //   userId: req.signedCookies.userId,
    // });

    // if (findUserIdExists) {
    //   return res.json("you have created menu already");
    // }

    await menuSchema.create({
      userId: req.signedCookies.userId,
      breakfast,
      dinner,
      desert,
      price,
    });
    console.log("hello");

    res.status(200).json("Sucess");
  } catch (error) {
    console.log(error);
  }
};

const getMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const menu = await menuSchema.findOne({ userId: id });
    res.status(200).json(menu);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createMenu, getMenu };
