const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_KEY = "AIzaSyCvh86kk5XfoLYSIU2i7vt5HS9YBbCTuYo";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

// Chatbot Route
app.post("/chat", async (req, res) => {
    try {
        const { message } = req.body;
        
        const response = await axios.post(GEMINI_URL, {
            contents: [{ parts: [{ text: message }] }],
        });
        
        const botReply = response.data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand that.";
        res.json({ reply: botReply });
    } catch (error) {
        console.error("Error with Gemini API: ", error.message);
        res.status(500).json({ error: "Failed to get response from AI" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
