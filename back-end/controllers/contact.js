const contactSchema = require("../models/contact");

const createContact = async (req, res) => {
  try {
    await contactSchema.create({ ...req.body });
    setTimeout(() => {
      res.redirect("http://localhost:3000/");
    }, 2000);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createContact };
