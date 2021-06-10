const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3333;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const auth = require("./src/routes/auth.js");

app.get("/", (req, res) => {
  res.send("Status 200, All OK.");
});

app.use("/auth/", auth);

app.listen(port, () => {
  console.log(`Localhost ready: http://localhost:${port}`);
});
