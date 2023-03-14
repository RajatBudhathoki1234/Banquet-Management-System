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
    if (path) {
      const splitedData = path.split("\\");
      console.log(splitedData);
      const newPath = splitedData[5];
      if (name && desc) {
        await banquetModel.create({
          banquet_name: name,
          banquet_description: desc,
          image_location: newPath,
        });
      }
    }

    res.send("Image uploaded");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getBanquet, createBanquet };
