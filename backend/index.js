const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const authRoutes = require("./routes/authRoutes");
const errorMiddleware = require("./middlewares/Error");

const jsonParser = bodyParser.json();
const app = express();
dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
app.use(jsonParser);
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.use("/api/v1", authRoutes);
app.use(errorMiddleware);

module.exports = app;
