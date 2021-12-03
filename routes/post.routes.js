const express = require("express");
const {getAllPosts, addPost, getById, editPost, deletePost} = require("../controller/post.controller")
const router = express.Router();

router.get("/", getAllPosts);
router.post("/", addPost);
router.get("/:id", getById);
router.put("/:id", editPost);

module.exports = router;