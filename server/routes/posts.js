import express from "express";
import { getFeedPosts, getUserPosts, likePost, addComment, deleteComment,sharePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";



const router = express.Router();

router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);
router.patch("/:id/like", verifyToken, likePost);
router.post("/:id/comment", verifyToken, addComment);
router.delete("/:id/comment/:commentId", verifyToken, deleteComment);
router.post('/:id/share', verifyToken, sharePost);
export default router;