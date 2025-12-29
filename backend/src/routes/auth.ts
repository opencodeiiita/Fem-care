import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";
import authMiddleware from "../middlewares/auth";

const router = Router();

/**
 * POST /auth/signup
 */
router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
});

/**
 * POST /auth/signin
 */
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    );

    return res.json({ token });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
});

export default router;
router.get("/protected", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route accessed successfully",
    userId: (req as any).userId,
  });
});
