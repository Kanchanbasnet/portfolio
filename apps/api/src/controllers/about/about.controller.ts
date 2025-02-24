import { NextFunction, Request, Response } from 'express';
import { About } from '../../models/about/about.schema';
import { CustomError } from '../../middlewares/errors';

export const addAbout = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { education, experience, skills, introduction } = req.body;
    const skillArray =
      typeof skills === 'string'
        ? skills.split(',').map((item: string) => item.trim())
        : skills;
    const aboutInfo = new About({
      education: education,
      experience: experience,
      skills: skillArray,
      introduction: introduction,
    });
    await aboutInfo.save();
    res.status(200).send({ message: 'Added Successfully', data: aboutInfo });
  } catch (error) {
    next(error);
  }
};

export const updateAbout = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const aboutInformation = await About.findById(id);
    if (!aboutInformation) {
      throw new CustomError('Could not find the information', 404);
    }
    const { education, experience, skills, introduction } = req.body;
    const skillArray =
      typeof skills === 'string'
        ? skills.split(',').map((item: string) => item.trim())
        : skills;
    await About.findByIdAndUpdate(id, {
      education: education,
      experience: experience,
      skills: skillArray,
      introduction: introduction,
    });
    res.status(200).send({ message: 'Updated Successfully' });
  } catch (error) {
    next(error);
  }
};

export const deleteAbout = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const aboutInformation = await About.findById(id);
    if (!aboutInformation) {
      throw new CustomError('Could not find the information', 404);
    }
    await About.findByIdAndDelete(id);
    res.status(200).send({ message: 'Deleted Successfully' });
  } catch (error) {
    next(error);
  }
};
