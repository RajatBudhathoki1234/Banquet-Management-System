const contactSchema = require("../models/contact");

const createContact = async (req, res) => {
  try {
    console.log(req.body);
    await contactSchema.create({ ...req.body });
    res.json("sucessfull");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createContact };
