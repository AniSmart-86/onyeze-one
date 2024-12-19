const express = require("express");
const cors = require("cors")
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./routes/adminRoutes.js");
const path = require('path');
// const connectCloudinary = require("./config/cloud.js");


const app = express();
app.use(express.json());

app.use(cors({
    origin: ['http://localhost:5173', 'https://onyeze-one.onrender.com'],
    credentials: true,
    methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['content-Type', 'AUthorization'],
}));
dotenv.config();


// connectCloudinary();
// Middleware
app.use(bodyParser.json());
app.use("/uploads/images", express.static( path.join(__dirname, "uploads/images"))); // Serve uploaded images as static files
app.use("/api/admin", router);


const PORT = process.env.PORT || 4000;
const MONGOURL = process.env.MONGO_URL;
// MongoDB connection
mongoose
  .connect(MONGOURL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection failed:", error));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

