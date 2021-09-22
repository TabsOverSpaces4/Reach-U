require("dotenv").config({ path: "./config/config.env" });
const express = require("express");
const loaders = require("./loaders/index");

const app = express();

// Initialize express and connect DB
loaders(app);

const { port, nodeEnv } = require("./config/config");
const server = app.listen(
  port,
  console.log(`Server started on port ${port} in ${nodeEnv} mode.`)
);

// Handle promise rejections
const handlePromiseRejections = require("./utils/handlePromiseRejections");
handlePromiseRejections(server);
