import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import User from "../models/User.js";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// 📬 Function to send email using Nodemailer
const sendEmail = async (to, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to,
      subject,
      text,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent to ${to}: ${info.response}`);
  } catch (error) {
    console.error("❌ Email sending error:", error);
  }
};

// **Signup Route**
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password, domain, occupation, profilePic } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    user = new User({
      name,
      email,
      password: hashedPassword,
      domain,
      occupation,
      profilePic,
    });
    await user.save();

    // 📩 Send Welcome Email via Nodemailer
    await sendEmail(
      email,
      "Welcome to Pitchwave! 🚀",
      `Hi ${name},\n\nAt Pitchwave, we are dedicated to providing a seamless and powerful platform to connect entrepreneurs with investors.\n\n✅ Showcase your startup and attract investors.\n✅ Get resources & insights to refine your pitch.\n✅ Join a community of innovators and experts.\n\nWe can’t wait to see the impact you’ll create! If you need assistance, reach out to our support team.\n\nBest Regards,\nThe Pitchwave Team`
    );

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// **Login Route**
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        domain: user.domain,
        occupation: user.occupation,
        profilePic: user.profilePic,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
