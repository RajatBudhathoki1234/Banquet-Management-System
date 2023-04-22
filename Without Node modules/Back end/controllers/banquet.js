const banquetModel = require("../models/banquet");

//Importing jwt to create a token.
const jwt = require("jsonwebtoken");

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
    //Destructing the objects.
    const { name, desc, location, price } = req.body;

    const { path } = req.file;

    console.log(path);
    if (path) {
      const splitedData = path.split("\\");
      const newPath = splitedData[5];
      console.log(newPath);
      if (name && desc) {
        //Creating a token.
        const token = jwt.sign(
          {
            userId: req.signedCookies.userId,
            banquet_name: name,
            banquet_description: desc,
            banquet_location: location,
            banquet_price: price,
            image_location: newPath,
          },
          "jwtsecret",
          {
            expiresIn: "1200s",
          }
        );
        return res.redirect(`http://localhost:3000/menu/${token}`);
      }
    }
    res.json("Unsucessful");
  } catch (error) {
    console.log(error);
  }
};

const filterBanquetName = async (req, res) => {
  try {
    const { name } = req.params;
    const getBanquetName = await banquetModel.find({
      banquet_name: { $regex: name },
    });
    if (getBanquetName.length === 0) {
      return res.send("unsucessful");
    }
    res.json(getBanquetName);
  } catch (error) {
    console.log(error);
  }
};

const filterBanquetLocation = async (req, res) => {
  try {
    //Destructing the objects.
    const { name } = req.params;
    console.log(name);
    const getBanquetLocation = await banquetModel.find({
      banquet_location: name,
    });
    if (getBanquetLocation.length === 0) {
      return res.send("unsucessful");
    }
    res.json(getBanquetLocation);
  } catch (error) {
    console.log(error);
  }
};

const filterBanquetPrice = async (req, res) => {
  try {
    const { range } = req.params;
    console.log(range);
    const [lessValue, greaterValue] = range.split(",");
    const getBanquetRange = await banquetModel.find({
      banquet_price: { $gte: lessValue, $lte: greaterValue },
    });
    // console.log(getBanquetRange);
    if (getBanquetRange.length === 0) {
      return res.send("unsucessful");
    }
    res.json(getBanquetRange);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getBanquet,
  createBanquet,
  filterBanquetName,
  filterBanquetLocation,
  filterBanquetPrice,
};
