import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    domain: { type: String, required: true },
    occupation: { type: String, required: true },
    customDomain: { type: String },
    customOccupation: { type: String },
    profilePic: { type: String }, // Store file path or URL

    domain: { type: String, required: true }, // Selected domain
    occupation: { type: String, required: true }, // Selected occupation
    profilePic: { type: String, default: "" }, // Optional profile pic URL
  },

  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
