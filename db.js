const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://FlowArt:Pa03d026$@food-delivery.dycgfvo.mongodb.net/"
    );
    console.log("success");
  } catch (err) {
    console.log("fail", err);
  }
};

module.exports = connectToDB;
