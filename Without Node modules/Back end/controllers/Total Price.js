const Banquet = require("../models/banquet");

const calculateTotalPrice = async (req, res) => {
  try {
    const { banquet_price, guest } = req.body;
    const total_price = Number(banquet_price) * guest.length;

    // Do something with the total_price value, e.g. save it to the database or return it to the client
    // ...

    res.status(200).json({ total_price });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error calculating total price" });
  }
};

module.exports = {
  calculateTotalPrice,
};
