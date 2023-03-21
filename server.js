const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const indexRouter = require("./routes/index");

const app = express();
app.use(express.json());
app.use(cors());

// database connection
mongoose.connect(process.env.ATLAS_URI).then(() => {
  console.log("Database connection is successful");
});

// server
const port = process.env.PORT || 5000;

// Routes
app.use("/api", indexRouter);

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
