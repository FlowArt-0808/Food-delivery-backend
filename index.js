// 1. npm init -y
// It creates package.json
// 2. npm i express cors
// It creates node_modules and package-lock.jsons

const express = require("express");
const cors = require("cors");
const connectToDB = require("./db");

("mongodb+srv://FlowArt:Pa03d026$@food-delivery.dycgfvo.mongodb.net/");

const app = express();
const PORT = process.env.PORT || 999;

app.use(cors());
app.use(express.json());
connectToDB();
app.get("/", (req, res) => {
  res.json("Yo what's up my dudes   ");
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
