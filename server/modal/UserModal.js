const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("User", UserSchema);
