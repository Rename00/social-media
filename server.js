require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = process.env.PORT || 3000;

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${3000}`);
});
