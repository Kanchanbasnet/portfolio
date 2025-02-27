export const getBlog = {
  get: {
    tags: ['Blog'],
    description: 'Get a list of blogs',
    summary: 'Get a list of blogs',
    operationId: 'getBlogs',
    parameters: [],
    requestBody: {},
    responses: {
      200: {
        description: 'A list of blogs',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/Blog',
              },
            },
          },
        },
      },
    },
  },
};

export const getBlogById = {
  get: {
    tags: ['Blog'],
    description: 'Get a blog by id',
    summary: 'Get a blog by id',
    operationId: 'getBlogById',

    parameters: [
      {
        name: 'blogId',
        in: 'path',
        description: 'The id of the blog',
        required: true,
        type: 'string',
      },
    ],
    requestBody: {},
    responses: {
      200: {
        description: 'A blog by id',
        content: {
          'application/json': {
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
        },
        400: {
          description: 'Invalid blog Id ',
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
        },
      },
    },
  },
};
