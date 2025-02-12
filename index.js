const express = require("express");
const app = express();
const Router = require("./routes/router");
require("dotenv").config();

app.use(express.json());
app.use("/", Router);

app.listen(process.env.Port, () => {
  console.log(`Server is running on port ${process.env.Port}`);
});
