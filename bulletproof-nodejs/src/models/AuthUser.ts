import mongoose, { Schema } from "mongoose";

const UserModel = new Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is Required"],
  },
});

const User = mongoose.model("User", UserModel);

export default User;
