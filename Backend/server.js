import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";
import Contact from "./models/Contact.js";


dotenv.config();

const app = express();

// Middleware
app.use(cors({
    origin: "https://priyanshifrontend15.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)  // Changed from hardcoded string
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch((err) => console.log("❌ MongoDB Connection Error:", err.message));

app.post("/test-save", async (req, res) => {
    try {
        const testContact = new Contact({
            name: "Test",
            email: "test@test.com",
            message: "Hello"
        });
        await testContact.save();
        res.json({ success: true, message: "Test contact saved!" });
    } catch (err) {
        console.error("Test save error:", err);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

// Routes
app.use("/api/contact", contactRoutes);

// Test routes
app.get("/", (req, res) => {
    res.json({ message: "Backend is running!" });
});

// Start server
const PORT = process.env.PORT;
console.log("ENV PORT:", process.env.PORT);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Server running on port ${PORT}`);
});


