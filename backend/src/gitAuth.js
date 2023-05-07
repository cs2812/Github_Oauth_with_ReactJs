const express = require("express");
require("dotenv").config();
const github = express.Router();
const { default: axios } = require("axios");
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

github.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

github.post("/github/auth/:id", async (req, res) => {
  let code = req.params.id;

  // Get access token
  const accessToken = await axios
    .post(`https://github.com/login/oauth/access_token`, null, {
      params: {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: code,
      },
      headers: {
        accept: "application/json",
      },
    })
    .catch(console.error);

    // user details
  const userdata = await axios
    .get("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${accessToken.data.access_token}`,
      },
    })
    .then((response) => {
      return res.status(200).json(response.data);
    })
    .catch((error) => {
      return res.status(400).json(error);
    });
});

module.exports = github;
