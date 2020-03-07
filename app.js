"use strict";

const debug = require("debug")("assignment2:db");
const express = require("express");

require("./startup/database")(); // IIFE

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/mad9124", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to MongoDB ..."))
  .catch(err => {
    console.error("Problem connecting to MongoDB ...", err);
    process.exit(1);
  });


  
const app = express();

app.use(express.json());
app.use("/api/students", require("./routes/students"));
app.use("/api/courses", require("./routes/courses"));

const port = process.env.PORT || 3030;
app.listen(port, () => console.log(`Server listening on port ${port} ...`));