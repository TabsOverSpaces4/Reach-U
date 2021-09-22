const errorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");

const {
  createPostDocument,
  getPostDocumentById,
  updatePostDocumentById,
  deletePostDocumentById,
} = require("../services/post");

/**
 * @route   POST /api/v1/posts
 * @desc    Create a new post for the logged in user.
 */
exports.createPost = asyncHandler(async (req, res, next) => {
  req.body.user = req.user._id;

  const newPost = await createPostDocument(req.body);

  res.status(201).json({
    success: true,
    message: "The post was created successfully.",
    data: newPost,
  });
});

/**
 * @route   GET /api/v1/posts
 * @desc    Get all posts
 */
exports.getAllPosts = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

/**
 * @route   GET /api/v1/posts/:postId
 * @desc    Get a single post by id.
 */
exports.getPostById = asyncHandler(async (req, res, next) => {
  const post = await getPostDocumentById(req.params.postId);

  if (!post) {
    return next(
      new errorResponse(
        `Post with id of ${req.params.postId} was not found.`,
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    message: "The post was found successfully.",
    data: post,
  });
});

/**
 * @route   PUT /api/v1/posts/:postId
 * @desc    Update a post by id.
 */
exports.updatePostById = asyncHandler(async (req, res, next) => {
  const post = await updatePostDocumentById(req.params.postId, req.body);

  if (!post) {
    return next(
      new errorResponse(
        `Post with id of ${req.params.postId} was not found.`,
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    message: "The post was updated successfully.",
    data: post,
  });
});

/**
 * @route   DELETE /api/v1/posts/:postId
 * @desc    Delete a post by id.
 */
exports.deletePostById = asyncHandler(async (req, res, next) => {
  await deletePostDocumentById(req.params.postId);

  res.status(200).json({
    success: true,
    message: "The post was deleted successfully.",
  });
});

/**
 * @route   PUT /api/v1/posts/:postId/like
 * @desc    Like a post by id.
 */
exports.likePostById = asyncHandler(async (req, res, next) => {
  const post = await getPostDocumentById(req.params.postId);

  if (!post) {
    return next(
      new errorResponse(
        `Post with id of ${req.params.postId} was not found.`,
        404
      )
    );
  }

  const updatedPost = await updatePostDocumentById(req.params.postId, {
    likes: post.likes + 1,
  });

  res.status(200).json({
    success: true,
    message: "The post was liked successfully.",
    data: updatedPost,
  });
});

/**
 * @route   DELETE /api/v1/posts/:postId/like
 * @desc    Un-like a post by id.
 */
exports.unlikePostById = asyncHandler(async (req, res, next) => {
  const post = await getPostDocumentById(req.params.postId);

  if (!post) {
    return next(
      new errorResponse(
        `Post with id of ${req.params.postId} was not found.`,
        404
      )
    );
  }

  const updatedPost = await updatePostDocumentById(req.params.postId, {
    likes: post.likes - 1,
  });

  res.status(200).json({
    success: true,
    message: "The post was unliked successfully.",
    data: updatedPost,
  });
});
