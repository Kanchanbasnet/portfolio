import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AboutSchema = new Schema({
  education: [
    {
      degree: {
        type: String,
        required: true,
      },
      institution: {
        type: String,
        required: true,
      },
      year: {
        type: String,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
    },
  ],
  experience: [
    {
      company: {
        type: String,
        required: true,
      },
      designation: {
        type: String,
        required: true,
      },
      from: {
        type: Date,
        required: true,
      },
      to: {
        type: Date,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
    },
  ],
  skills: [String],
  introduction: {
    type: String,
    required: true,
  },
});

export const About = mongoose.model('About', AboutSchema);
