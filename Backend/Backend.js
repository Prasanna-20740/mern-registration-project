const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "projectfsd"
  })
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("❌ MongoDB Connection Failed:", err.message);
  });

// Register Route
app.use("/", require("./routes/register"));

// Start Server
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});