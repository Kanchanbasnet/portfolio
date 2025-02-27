export const deleteBlog = {
  delete: {
    tags: ['Blog'],
    description: 'Delete a blog by ID',
    summary: 'Delete a blog by ID',
    operationId: 'deleteBlog',

    parameters: [
      {
        name: 'blogId',
        in: 'path',
        description: 'The ID of the blog to delete',
        required: true,
        type: 'string',
      },
    ],
    requestBody: {},
    responses: {
      200: {
        description: 'Blog deleted successfully.',
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
        404: {
          description: 'Blog not found.',
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
