const mongoose = require("mongoose");
const app = require("./index");

let server;
mongoose.connect(process.env.MONGO_URL).then(() => {
  server = app.listen(process.env.PORT || "5000", () => {
    console.log(`server running at port ${process.env.PORT}`);
  });
});

// unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`shutting down the server due to unhandled promise rejection`);
  server.close(() => {
    process.exit();
  });
});
