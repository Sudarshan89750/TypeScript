import mongoose, { Schema } from "mongoose";
const UserModel = new Schema({
  name: {
    type: String,
    required: [true, "Name is Reuired "],
  },
  password: {
    type: String,
    required: [true, "Password is Reuired "],
  },
});
const User = mongoose.model("User", UserModel);
