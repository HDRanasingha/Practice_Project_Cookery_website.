import Post from "../models/Post.js";
import User from "../models/User.js";

/* CREATE */
export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await User.findById(userId);
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });
    await newPost.save();

    const post = await Post.find();
    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ */
export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const post = await Post.find({ userId });
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* ADD COMMENT */
export const addComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, comment } = req.body;

    const user = await User.findById(userId);
    const post = await Post.findById(id);

    const newComment = {
      userId,
      comment,
      firstName: user.firstName,
      lastName: user.lastName,
      userPicturePath: user.picturePath,
    };

    post.comments.push(newComment);
    const updatedPost = await Post.findByIdAndUpdate(id, { comments: post.comments }, { new: true });

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};





export const deleteComment = async (req, res) => {
  try {
    const { id, commentId } = req.params;
    const { userId } = req.body;

    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const comment = post.comments.id(commentId);

    if (!comment) {
      return res.status(404).json({ message: 'Comment not found' });
    }

    if (comment.userId !== userId) {
      return res.status(403).json({ message: 'You can only delete your own comments' });
    }

    post.comments = post.comments.filter(comment => comment._id.toString() !== commentId);

    const updatedPost = await Post.findByIdAndUpdate(id, { comments: post.comments }, { new: true });

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* SHARE */
export const sharePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;

    const originalPost = await Post.findById(id);

    if (!originalPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    // Create a new post for sharing
    const newSharedPost = new Post({
      userId,
      firstName: originalPost.firstName,
      lastName: originalPost.lastName,
      location: originalPost.location,
      description: originalPost.description,
      picturePath: originalPost.picturePath,
      userPicturePath: originalPost.userPicturePath,
      likes: {},
      comments: [],
      shared: true,
      originalPostId: id
    });

    await newSharedPost.save();

    res.status(201).json(newSharedPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};