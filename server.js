
const express = require("express");

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.send("under development...");
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${3000}`);
});
