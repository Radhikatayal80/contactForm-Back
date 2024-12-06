const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  state: String,
  city: String,
  age: Number,
  gender: String,
  mobileNumber: String,
  message: String,
  selectedOption: String,
  selectedHobbies: [String],
  termsAccepted: Boolean,
});

module.exports = mongoose.model("Form", formSchema);
