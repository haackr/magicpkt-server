const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

app.use(express.json());

const computersRouter = require("./routes/computers");

app.use("/computers", computersRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose.connect(
  process.env.DATABASE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to db!");
  }
);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
