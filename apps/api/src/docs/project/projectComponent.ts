export const ProjectSchema = {
  type: 'object',
  properties: {
    title: { type: 'string' },
    techStack: {
      type: 'array',
      items: { type: 'string' },
    },
    githubLink: { type: 'string' },
    liveLink: { type: 'string' },
    image: { type: 'string' },
  },
  required: ['title', 'techStack', 'githubLink', 'liveLink', 'image'],
};
