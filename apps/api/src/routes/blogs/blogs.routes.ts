import express from 'express';
import { upload } from '../../helper/multer';
import {
  addBlogs,
  deleteBlogById,
  getBlogById,
  getBlogs,
  updateBlogById,
} from '../../controllers/blogs/blogs.controller';

const router = express.Router();

router.post('/addBlog', upload.single('image'), addBlogs);
router.get('/getBlogs', getBlogs);
router.get('/:blogId', getBlogById);
router.patch('/updateBlog/:blogId', upload.single('image'), updateBlogById);
router.delete('/deleteBlog/:blogId', deleteBlogById);

export default router;
