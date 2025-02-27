export const updateBlogs = {
  patch: {
    tags: ['Blog'],
    description: 'Update a new blog',
    summary: 'Update a new blog',
    operationId: 'updateBlog',

    parameters: [
      {
        name: 'title',
        in: 'formData',
        description: 'The title of the blog',
        required: false,
        type: 'string',
      },
      {
        name: 'description',
        in: 'formData',
        description: 'The description of the blog',
        required: false,
        type: 'string',
      },
      {
        name: 'date',
        in: 'formData',
        description: 'The date of the blog',
        required: false,
        type: 'string',
      },
      {
        name: 'image',
        in: 'formData',
        description: 'The image file for the blog',
        required: false,
        type: 'file',
      },
      {
        name: 'blogLink',
        in: 'formData',
        description: 'The link to the blog',
        required: false,
        type: 'string',
      },
    ],
    requestBody: {},
    responses: {
      200: {
        description: 'Blog Updated Successfully.',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                },
              },
            },
          },
        },
        400: {
          description:
            'Missing blog parameters or blog with same title already exists.',
          content: {
            'application/json': {
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
      },
    },
  },
};
