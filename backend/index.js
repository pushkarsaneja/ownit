const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");

const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api/v1", authRoutes);

module.exports = app;
