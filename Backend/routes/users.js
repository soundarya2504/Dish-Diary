const express = require("express");
const router = express.Router();
const UserModels = require("../model/UserModels");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

router.use(bodyParser.json());

// Signup Route
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if email already exists
    const emailFound = await UserModels.findOne({ email });
    if (emailFound) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    let user = new UserModels({
      username,
      email,
      password: hashedPassword,
      isVerified: false, // Default to false until verification
    });

    await user.save(); // Await saving to database

    // Email Transporter Configuration
    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    // Generate Email Verification Token
    const token = jwt.sign({ email }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    const verificationLink = `http://localhost:5001/users/verify/${token}`;

    // Send Email with Verification Link
    try {
      await transport.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: "Verify Your Email",
        html: `<p>Click the link below to verify your email:</p>
               <a href="${verificationLink}">Verify Email</a>`,
      });
    } catch (mailError) {
      return res.status(500).json({ message: "Email sending failed", error: mailError });
    }

    res.status(200).json({ message: "Signup successful! Activation link sent." });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});
router.get("/verify/:token", async (req, res) => {
  try {
    const { token } = req.params;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const user = await UserModels.findOne({ email: decoded.email });
    if (!user) {
      return res.status(404).json({ message: "Invalid token or user not found" });
    }

    // Update verification status
    user.isVerified = true;
    await user.save(); // Await user update

    res.status(200).json({ message: "Email verification successful" });
  } catch (err) {
    res.status(500).json({ message: "Invalid or expired token", error: err.message });
  }
});

module.exports = router;
