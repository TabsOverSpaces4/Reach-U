const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

// Security
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");

// Utility
const morgan = require("morgan");
const fileupload = require("express-fileupload");
const errorHandler = require("../middleware/error");

// Bring in route files
const auth = require("../routes/auth");
const authClient = require("../routes/authClient");
const postRouter = require("../routes/post");
const carpoolRouter = require("../routes/carpool");
const locationRouter = require("../routes/location");
const stopLocationRouter = require("../routes/stopLocation");
const imageRouter = require("../routes/image");
const giveAwayRouter = require("../routes/giveaway");

module.exports = (app) => {
  // Public files
  app.use(express.static(path.resolve("public")));
  app.use(express.static(path.resolve("views")));

  // Body parser
  app.use(express.json());

  // Cookie parser
  app.use(cookieParser());

  // Dev logging middleware
  const { nodeEnv } = require("../config/config");
  if (nodeEnv === "Development") {
    app.use(morgan("dev"));
  }

  // File uploading
  app.use(fileupload());

  // Sanitize data
  app.use(mongoSanitize());

  // Set security headers
  app.use(
    helmet({
      contentSecurityPolicy: false,
    })
  );

  // Prevent XSS attacks
  app.use(xss());

  // Rate limiting
  const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 mins
    max: 100,
  });
  app.use(limiter);

  // Prevent http param pollution
  app.use(hpp());

  // Mount routers
  app.use("/api/v1/auth", auth);
  app.use("/auth", authClient);
  app.use("/api/v1/posts", postRouter);
  app.use("/api/v1/carpool", carpoolRouter);
  app.use("/api/v1/location", locationRouter);
  app.use("/api/v1/stopLocation", stopLocationRouter);
  app.use("/api/v1/images", imageRouter);
  app.use("/api/v1/giveAways", giveAwayRouter);

  app.use("/", (req, res) => {
    res.status(200).json({ success: true });
  });

  // Custom error handler middleware
  app.use(errorHandler);

  return app;
};
