import express from "express";
import Contact from "../models/Contact.js";  // Correctly import the model

const router = express.Router();

router.post("/send", async (req, res) => {
    try {
        console.log("Received data:", req.body);  // Log for debugging
        const { name, email, phoneNumber, message } = req.body;

        // Validation (like checking if data exists)
        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        // Create and save (this could fail if MongoDB is down)
        const newContact = new Contact({ name, email, phoneNumber, message });
        await newContact.save();  // If this throws an error (e.g., DB connection issue), it's caught

        res.json({ success: true, message: "Message sent success4fully!" });
    } catch (error) {
        console.error("Error in /api/contact/send:", error);  // Detailed logging
        res.status(500).json({ success: false, message: "Internal server error. Please try again." });
    }
});
export default router;