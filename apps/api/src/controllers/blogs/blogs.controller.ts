import { NextFunction, Request, Response } from 'express';
import { CustomError } from '../../middlewares/errors';
import { Blogs } from '../../models/blogs/blogs.schema';

export const addBlogs = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { title, description, blogLink, date } = req.body;
    const image = req.file ? req.file.filename : '';

    if (!title || !description || !blogLink || !date || !image) {
      throw new CustomError('Missing blogs properties', 400);
    }
    const newBlog = new Blogs({
      title,
      description,
      date,
      image,
      blogLink,
    });
    await newBlog.save();
    res
      .status(200)
      .send({ message: 'Blogs created Successfully', data: newBlog });
  } catch (error) {
    next(error);
  }
};

export const getBlogs = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const blogs = await Blogs.find();
    if (blogs.length === 0) {
      throw new CustomError('No Blog found', 404);
    }
    res
      .status(200)
      .send({ message: 'Blogs fetched Successfully', data: blogs });
  } catch (error) {
    next(error);
  }
};

export const getBlogById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { blogId } = req.params;
    const blog = await Blogs.findById(blogId);
    if (!blog) {
      throw new CustomError('Blog not Found', 404);
    }
    res.status(200).send({ message: 'Blog fetched Successfully', data: blog });
  } catch (error) {
    next(error);
  }
};

export const updateBlogById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { blogId } = req.params;
    const blog = await Blogs.findById(blogId);
    if (!blog) {
      throw new CustomError('Blog not Found', 404);
    }
    const { title, description, date, blogLink } = req.body;
    const image = req.file ? req.file.filename : blog.image;
    await Blogs.findByIdAndUpdate(blogId, {
      title,
      description,
      date,
      image,
      blogLink,
    });
    res.status(200).send({ message: 'Blog Updated Successfully' });
  } catch (error) {
    next(error);
  }
};

export const deleteBlogById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { blogId } = req.params;
    const blog = await Blogs.findById(blogId);
    if (!blog) {
      throw new CustomError('Blog Not Found', 404);
    }
    await Blogs.findByIdAndDelete(blogId);
    res.status(200).send({ message: 'Blog deleted Successfully.' });
  } catch (error) {
    next(error);
  }
};
