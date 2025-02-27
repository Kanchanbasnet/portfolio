export const BlogSchema = {
  type: 'object',
  properties: {
    title: { type: 'string' },

    description: { type: 'string' },
    date: { type: 'string' },
    image: { type: 'string' },
    blogLink: { type: 'string' },
  },
  required: ['title', 'description', 'date', 'blogLink', 'image'],
};
