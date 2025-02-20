import { Project } from '../../models/project/project.schema';

export const addproject = async (req, res, next) => {
  try {
    const { title, techStack, githubLink, liveLink, image } = req.body;
    if (!title || !techStack || !githubLink || !liveLink || !image) {
      throw new Error(`Missing project properties!`);
    }
    const project = new Project({
      title,
      techStack,
      githubLink,
      liveLink,
      image: req?.file?.filename,
    });
    await project.save();
    res.status(200).send(project);
  } catch (err) {
    next(err);
  }
};
