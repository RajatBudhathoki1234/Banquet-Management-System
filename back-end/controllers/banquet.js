const banquetModel = require("../models/banquet");

const getBanquet = async (req, res) => {
  try {
    const banquetData = await banquetModel.find({});
    res.json(banquetData);
  } catch (error) {
    console.log(error);
  }
};

const createBanquet = async (req, res) => {
  try {
    const { name, desc } = req.body;
    const { path } = req.file;

    const findUserIdExists = await banquetModel
      .find({
        userId: req.signedCookies.userId,
      })
      .count();

    if (findUserIdExists > 0) {
      return res.send("you have created the banquet already");
    }

    if (path) {
      const splitedData = path.split("\\");
      const newPath = splitedData[5];
      if (name && desc) {
        await banquetModel.create({
          userId: req.signedCookies.userId,
          banquet_name: name,
          banquet_description: desc,
          image_location: newPath,
        });
      }
    }

    res.redirect(`http://localhost:3000/menu/${req.signedCookies.userId}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getBanquet, createBanquet };
