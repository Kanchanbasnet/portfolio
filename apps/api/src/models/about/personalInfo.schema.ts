import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PersonalInformationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  contactInformation: {
    email: {
      type: String,
      required: true,
    },
    linkedIn: {
      type: String,
    },
    twitter: {
      type: String,
    },
    github: {
      type: String,
    },
    instagram: {
      type: String,
    },
  },
});

export const PersonalInformation = mongoose.model(
  'PersonalInformation',
  PersonalInformationSchema,
);
