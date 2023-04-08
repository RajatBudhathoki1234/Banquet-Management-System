const menuSchema = require("../models/menu");

const createMenu = async (req, res) => {
  try {
    const [breakfast, dinner, desert, price] = req.body.menu;

    const findUserIdExists = await menuSchema
      .find({
        userId: req.signedCookies.userId,
      })
      .count();

    if (findUserIdExists > 0) {
      return res.send("you have created menu already");
    }

    await menuSchema.create({
      userId: req.signedCookies.userId,
      breakfast,
      dinner,
      desert,
      price,
    });
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
