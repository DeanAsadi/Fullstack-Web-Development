const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ res: "response was succesful..." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`connected to port ${PORT} `);
});
