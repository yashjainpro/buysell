const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("APi really"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`sever started on Port ${PORT}`));
