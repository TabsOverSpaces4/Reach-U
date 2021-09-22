const router = require("express").Router();

const { resetPassword, forgotPassword } = require("../controllers/authClient");

router.route("/forgotpassword").get(forgotPassword);
router.route("/resetpassword/:resettoken").get(resetPassword);

module.exports = router;
