import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import multer from "multer";
import path from "path";
import dotenv from "dotenv";
import User from "../models/User.js";

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

// 🖼️ Multer Storage Configuration for Profile Picture Upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Store files in 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`); // Unique file name
  },
});

const upload = multer({ storage });

// **Signup Route with Profile Picture Upload**
router.post("/signup", upload.single("profilePic"), async (req, res) => {
  try {
    const { name, email, password, domain, occupation } = req.body;
    const profilePic = req.file ? `/uploads/${req.file.filename}` : ""; // File URL

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

    // 📩 Send Welcome Email
    await sendEmail(
      email,
      "Welcome to Pitchwave! 🚀",
      `Hi ${name},\n\nAt Pitchwave, we are dedicated to providing a seamless and powerful platform to connect entrepreneurs with investors.\n\n✅ Showcase your startup and attract investors.\n✅ Get resources & insights to refine your pitch.\n✅ Join a community of innovators and experts.\n\nWe can’t wait to see the impact you’ll create! If you need assistance, reach out to our support team.\n\nBest Regards,\nThe Pitchwave Team`
    );

    res
      .status(201)
      .json({ message: "User registered successfully", profilePic });
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
