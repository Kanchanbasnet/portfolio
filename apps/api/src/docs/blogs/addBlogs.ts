export const addBlogs = {
  post: {
    tags: ['Blog'],
    description: 'Add a new blog',
    summary: 'Add a new blog',
    operationId: 'addBlog',
    consumes: ['multipart/form-data'],
    parameters: [
      {
        name: 'title',
        in: 'formData',
        description: 'The title of the blog',
        required: true,
        type: 'string',
      },
      {
        name: 'description',
        in: 'formData',
        description: 'The description of the blog',
        required: true,
        type: 'string',
      },
      {
        name: 'date',
        in: 'formData',
        description: 'The date of the blog',
        required: true,
        type: 'string',
      },
      {
        name: 'image',
        in: 'formData',
        description: 'The image file for the blog',
        required: true,
        type: 'file',
      },
      {
        name: 'blogLink',
        in: 'formData',
        description: 'The link to the blog',
        required: true,
        type: 'string',
      },
    ],
    responses: {
      200: {
        description: 'Blog Added Successfully.',
        schema: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
            },
            data: {
              $ref: '#/components/schemas/Blog',
            },
          },
        },
      },
      400: {
        description:
          'Missing blog parameters or blog with same title already exists.',
        schema: {
          type: 'object',
          properties: {
            error: {
              type: 'string',
            },
            message: {
              type: 'string',
            },
          },
        },
      },
    },
  },
};
