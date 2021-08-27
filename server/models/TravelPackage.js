const mongoose = require("mongoose");

const { Schema } = mongoose;

const travelpackageSchema = new Schema({
  location: String,
  climate: [String],
  topography: [String],
  airfare: Boolean,
  transportation: String,
  lodging: String,
  activity: [String],
  cost: Number,
});

const travelpackage = mongoose.model("TravelPackage", travelpackageSchema);

module.exports = travelpackage;
