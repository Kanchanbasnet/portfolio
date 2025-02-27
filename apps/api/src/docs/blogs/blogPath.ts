import { addBlogs } from './addBlogs';
import { deleteBlog } from './deleteBlogs';
import { updateBlogs } from './updateBlog';
import { getBlog, getBlogById } from './getBlogs';

export const blogsPath = {
  '/blogs': {
    ...addBlogs,
    ...getBlog,
  },
  '/blogs/:blogId': {
    ...deleteBlog,
    ...updateBlogs,
    ...getBlogById,
  },
};
