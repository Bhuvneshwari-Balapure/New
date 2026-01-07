const express = require("express");
const app = require("express")();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json());
app.use(cors());

const userRoutes = require("./routes/UserRoutes");
require("dotenv").config();

const DB = process.env.DB;
const PORT = process.env.PORT || 8000;
mongoose
  .connect(DB)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("DB connection error:", err);
  });
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
