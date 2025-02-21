import { NextFunction, Request, Response } from 'express';
import { Project } from '../../models/project/project.schema';
import { CustomError } from '../../middlewares/errors';

export const addProject = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { title, techStack, githubLink, liveLink } = req.body;
    const image = req.file ? req.file.filename : '';

    if (!title || !techStack || !githubLink || !liveLink || !image) {
      throw new CustomError('Missing project parameters', 400);
    }
    const projectExists = await Project.findOne({ title: title });
    if (projectExists) {
      throw new CustomError('Project with same title already exists', 400);
    }
    const techStackArray =
      typeof techStack === 'string'
        ? techStack.split(',').map((item: string) => item.trim())
        : techStack;
    const project = new Project({
      title,
      techStack: techStackArray,
      githubLink,
      liveLink,
      image: image,
    });
    await project.save();
    res
      .status(200)
      .send({ message: 'Project Created Successfully', data: project });
  } catch (error) {
    next(error);
  }
};

export const getProject = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const project = await Project.find();
    if (project.length === 0) {
      throw new CustomError('No projects found', 404);
    }
    res
      .status(200)
      .send({ message: 'Projects fetched successfully', data: project });
  } catch (error) {
    next(error);
  }
};

export const getProjectById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { projectId } = req.params;
    const project = await Project.findById(projectId );
    if (!project) {
      throw new CustomError('Project not found', 404);
    }
    res
      .status(200)
      .send({ message: 'Projects fetched successfully', data: project });
  } catch (error) {
    next(error);
  }
};
