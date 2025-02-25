import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.js"; // Import auth routes

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Pitchwave Backend is Running successfully :)");
});

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}✅`);
});
