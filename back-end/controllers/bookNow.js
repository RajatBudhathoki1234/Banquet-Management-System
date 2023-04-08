const bookedNow = require("../models/bookNow");

const createBookNow = async (req, res) => {
  try {
    const { shift, date, guest, type } = req.body;
    console.log(shift, date, guest, type);
    if (shift == null || date == null || guest == null || type == null) {
      return res.send("Please fill the values");
    }
    await bookedNow.create({
      bookUserId: req.signedCookies.userId,
      ...req.body,
    });
    setTimeout(() => {
      res.redirect("http://localhost:3000/banquet");
    }, 2000);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createBookNow };
