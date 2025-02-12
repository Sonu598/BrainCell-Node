const express = require("express");
const Router = express.Router();
const axios = require("axios");
require("dotenv").config();

Router.get("/users", async (req, res) => {
  try {
    const response = await axios.get(process.env.dataURI);
    const userData = response.data;
    if (req.query.name) {
      const filteredData = userData.filter((user) => {
        return user.name.toLowerCase().includes(req.query.name.toLowerCase());
      });
      res.status(200).json(filteredData);
    } else if (req.query.sort) {
      const sortedData = userData.sort((a, b) => {
        if (req.query.sort === "asc") {
          return a.name.localeCompare(b.name);
        } else if (req.query.sort === "desc") {
          return b.name.localeCompare(a.name);
        }
      });
      res.status(200).json(sortedData);
    } else {
      res.status(200).json(userData);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = Router;
