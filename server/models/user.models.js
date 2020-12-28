const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firstName: { type: String, maxlength: 64, required: true },
    lastName: { type: String, maxlength: 64, required: true },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true, maxlength: 1024 },
    isWriter: { type: Boolean, default: false },
  },
  { timestamps: true }
);

UserSchema.plugin(uniqueValidator, { message: "user not unique" });
module.exports = mongoose.model("User", UserSchema);
