const asyncHandler = require("../middleware/async");
const mongoose = require("mongoose");
const Post = require("../models/Post");

exports.createPostDocument = asyncHandler(async (reqBody) => {
  return await Post.create(reqBody);
});

exports.getPostDocumentById = asyncHandler(async (postId) => {
  return await Post.findById(postId).populate("image");
});

exports.updatePostDocumentById = asyncHandler(async (postId, reqBody) => {
  return await Post.findByIdAndUpdate(postId, reqBody, {
    runValidators: true,
    new: true,
  });
});

exports.deletePostDocumentById = asyncHandler(async (postId) => {
  return await Post.findByIdAndDelete(postId);
});
