const express = require("express");

const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
var cors = require("cors");

const path = require("path");
const userRouter_V1 = require("./routes/validate");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
const app = express();

app.use(cors(corsOptions)); // Use this after the variable declaration
app.use(express.json());

app.use("/", userRouter_V1);

const PORT = 5001;

const server = app.listen(PORT, () =>
  console.log(`server running at ${PORT} `)
);

process.on("unhandledRejection", (err) => {
  console.log("ERROR==>", err);
  server.close(() => process.exit(1));
});
