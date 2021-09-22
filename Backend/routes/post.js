const router = require("express").Router({ mergeParams: true });

const { protect } = require("../middleware/auth");
const advancedResults = require("../middleware/advancedResults");

const Post = require("../models/Post");

const {
  createPost,
  getPostById,
  updatePostById,
  deletePostById,
  getAllPosts,
  likePostById,
  unlikePostById,
} = require("../controllers/post");

router
  .route("/")
  .post(protect, createPost)
  .get(advancedResults(Post, "user"), getAllPosts);

router
  .route("/:postId")
  .get(protect, getPostById)
  .put(protect, updatePostById)
  .delete(protect, deletePostById);

router
  .route("/:postId/like")
  .put(protect, likePostById)
  .delete(protect, unlikePostById);

module.exports = router;
