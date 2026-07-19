// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/contactDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

// Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  subject: { type: String },
  message: { type: String, required: true },
}, { timestamps: true });

const Contact = mongoose.model("Contact", contactSchema);

// Routes

// Create contact
app.post("/api/contact", async (req, res) => {
  console.log("Incoming Data:", req.body);
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "All required fields must be filled" });
  }

  try {
    const newContact = new Contact({ name, email, phone, subject, message });
    await newContact.save();
    res.status(201).json({ message: "Message saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save message" });
  }
});

// Get all contacts
app.get("/api/contact", async (req, res) => {
  try {
    const allContact = await Contact.find().sort({ createdAt: -1 });
    res.json({ allContact });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
});

// Delete contact by ID
app.delete("/api/contact/:id", async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Contact not found" });
    res.json({ message: "Contact deleted successfully", contact: deleted });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete contact" });
  }
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});