import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  techStack: [{ type: String }],
  githubLink: {
    type: String,
    required: true,
  },
  liveLink: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export const Project = mongoose.model('Project', ProjectSchema);
