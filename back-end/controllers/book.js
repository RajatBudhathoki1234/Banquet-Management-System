const bookedSchema = require("../models/book");

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

const bookedMenu = async (req, res) => {
  try {
    const { breakfast, dinner, desert } = req.body;
    if (breakfast == null || dinner == null || desert == null) {
      return res.send("Please fill the values");
    }
    await bookedSchema.create({
      bookUserId: req.signedCookies.userId,
      ...req.body,
    });
    res.send("Booked");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { filterBanquet, bookedMenu };
