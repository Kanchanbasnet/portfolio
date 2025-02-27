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

router.post('/', upload.single('image'), addBlogs);
router.get('/', getBlogs);
router.get('/:blogId', getBlogById);
router.patch('/:blogId', upload.single('image'), updateBlogById);
router.delete('/:blogId', deleteBlogById);

export default router;
