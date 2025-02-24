import { NextFunction, Request, Response } from 'express';
import { PersonalInformation } from '../../models/about/personalInfo.schema';
import { CustomError } from '../../middlewares/errors';

export const addPersonalInformation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {
      name,
      designation,
      address,
      email,
      linkedIn,
      twitter,
      github,
      instagram,
    } = req.body;
    const image = req.file ? req.file.filename : '';
    const contactInformation = {
      email: email,
      linkedIn: linkedIn,
      twitter: twitter,
      github: github,
      instagram: instagram,
    };
    if (!name || !designation || !contactInformation || !image) {
      throw new CustomError('Missing personal Information Properties', 400);
    }
    const personalInformation = new PersonalInformation({
      name: name,
      designation: designation,
      address: address,
      contactInformation: contactInformation,
      image: image,
    });
    await personalInformation.save();
    res.status(200).send({
      message: 'Personal Information added successfully!',
      data: personalInformation,
    });
  } catch (error) {
    next(error);
  }
};

export const updatePersonalInformation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const personalInformation = await PersonalInformation.findById(id);
    if (!personalInformation) {
      throw new CustomError('Personal Information not found', 404);
    }
    const {
      name,
      designation,
      address,
      email,
      linkedIn,
      twitter,
      github,
      instagram,
    } = req.body;
    const image = req.file ? req.file.filename : personalInformation?.image;
    const contactInformation = {
      email: email,
      linkedIn: linkedIn,
      twitter: twitter,
      github: github,
      instagram: instagram,
    };
    await PersonalInformation.findByIdAndUpdate(id, {
      name: name,
      designation: designation,
      address: address,
      contactInformation: contactInformation,
      image: image,
    });
    res
      .status(200)
      .send({ message: 'Personal Information updated successfully!' });
  } catch (error) {
    next(error);
  }
};

export const deletePersonalInformation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const personalInformation = await PersonalInformation.findById(id);

    if (!personalInformation) {
      throw new CustomError('Personal Information not found', 404);
    }
    await PersonalInformation.findByIdAndDelete(id);
    res
      .status(200)
      .send({ message: 'Personal Information deleted successfully!' });
  } catch (error) {
    next(error);
  }
};
