import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BlogsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  blogLink: {
    type: String,
    required: true,
  },
});

export const Blogs = mongoose.model('Blogs', BlogsSchema);
