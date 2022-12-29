const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const stolenReportRoutes = require("./routes/stolenReportRoutes");
const errorMiddleware = require("./middlewares/Error");

const jsonParser = bodyParser.json({ limit: "50mb" });
const app = express();
dotenv.config();
app.use(bodyParser.urlencoded({ extended: true, parameterLimit: 50000 }));
app.use(jsonParser);
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.use("/api/v1", authRoutes);
app.use("/api/v1", productRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1/transaction", transactionRoutes);
app.use("/api/v1/report", stolenReportRoutes);
app.use(errorMiddleware);

module.exports = app;
