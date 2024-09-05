import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  location: String,
  description: String,
  picturePath: String,
  userPicturePath: String,
  likes: {
    type: Map,
    of: Boolean,
    default: {}
  },
  comments: [{
    userId: { type: String, required: true },
    commentId: { type: mongoose.Schema.Types.ObjectId },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userPicturePath: String,
    comment: { type: String, required: true },
  }],



  shared: { type: Boolean, default: false },
  originalPostId: { type: String, default: null }
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

export default Post;