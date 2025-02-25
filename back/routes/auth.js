import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import sgMail from "@sendgrid/mail";
import User from "../models/User.js";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// ✅ Set SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// 📬 Function to send email using SendGrid
const sendEmail = async (to, subject, text) => {
  try {
    const msg = {
      to,
      from: process.env.EMAIL_FROM, // Your verified SendGrid email
      subject,
      text,
    };
    await sgMail.send(msg);
    console.log(`✅ Email sent to ${to}`);
  } catch (error) {
    console.error("❌ Email sending error:", error.response?.body || error);
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

    // 📩 Send Welcome Email via SendGrid
    await sendEmail(
      email,
      "Welcome to Our Platform Pitchwave! Your Journey Starts Here! 🚀",
      `Hi ${name},–

                                                                                                                                                           
      At Pitchwave, we are dedicated to providing a seamless and powerful platform to connect entrepreneurs with investors, helping you bring your ideas to life. Here’s what you can expect from us:

    ✅ A dynamic platform to showcase your startup and attract investors.
    ✅ Resources & insights to refine your pitch and improve your business strategy.
    ✅ A supportive community of like-minded innovators and experts.

       We can’t wait to see the incredible impact you’ll create! If you have any questions or need assistance, feel free to reach out to our support team.

       Get started today by exploring our platform and making the most out of Pitchwave!

        Best Regards,
      The Pitchwave Team`
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

// import express from "express";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import nodemailer from "nodemailer";
// import User from "../models/User.js";

// const router = express.Router();

// // 📩 Nodemailer Configuration
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER || "fallback-email@gmail.com",
//     pass: process.env.EMAIL_PASS || "fallback-password",
//   },
// });

// // 📬 Function to send email
// const sendEmail = async (to, subject, text) => {
//   try {
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to,
//       subject,
//       text,
//     });
//     console.log(`✅ Email sent to ${to}`);
//   } catch (error) {
//     console.error("❌ Email sending error:", error);
//   }
// };

// // **Signup Route**
// router.post("/signup", async (req, res) => {
//   try {
//     const { name, email, password, domain, occupation, profilePic } = req.body;

//     // Check if user already exists
//     let user = await User.findOne({ email });
//     if (user) return res.status(400).json({ message: "User already exists" });

//     // Hash password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     user = new User({
//       name,
//       email,
//       password: hashedPassword,
//       domain,
//       occupation,
//       profilePic,
//     });
//     await user.save();

//     // 📩 Send Welcome Email
//     await sendEmail(
//       email,
//       "Welcome to Our Platform!",
//       `Hi ${name},\n\nThank you for registering!\nEnjoy our services.\n\nBest regards,\nYour Team`
//     );

//     res.status(201).json({ message: "User registered successfully" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // **Login Route**
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "Invalid credentials" });

//     // Compare password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch)
//       return res.status(400).json({ message: "Invalid credentials" });

//     // Generate JWT token
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "1d",
//     });

//     res.json({
//       token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         domain: user.domain,
//         occupation: user.occupation,
//         profilePic: user.profilePic,
//       },
//     });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// export default router;
