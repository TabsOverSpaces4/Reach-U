const path = require("path");

// Forgot password
exports.forgotPassword = (req, res, next) => {
  res.status(200).sendFile(path.resolve("./views/forgotpassword.html"));
};

// Update password with email confirmation token
exports.resetPassword = (req, res, next) => {
  res.status(200).sendFile(path.resolve("./views/resetpassword.html"));
};
