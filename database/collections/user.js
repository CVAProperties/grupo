const mongoose = require("../connect");
var userSchema = {
  name : String,
  edad : Number,
  sexo : String,
  email : String
};
var user = mongoose.model("user", userSchema);
module.exports = user;