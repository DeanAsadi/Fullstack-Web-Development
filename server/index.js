const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ res: "response was succesful" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);