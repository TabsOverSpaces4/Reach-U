const router = require("express").Router({ mergeParams: true });

const { createImage, getImageById } = require("../controllers/image");

router.route("/").post(createImage);

router.route("/:imageId").get(getImageById);

module.exports = router;
