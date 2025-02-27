export const getProject = {
  get: {
    tags: ['Project'],
    description: 'Get a list of projects',
    summary: 'Get a list of projects',
    operationId: 'getProject',
    parameters: [],
    requestBody: {},
    responses: {
      200: {
        description: 'A list of projects',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/Project',
              },
            },
          },
        },
      },
    },
  },
};

export const getProjectById = {
  get: {
    tags: ['Project'],
    description: 'Get a project by id',
    summary: 'Get a project by id',
    operationId: 'getProjectById',

    parameters: [
      {
        name: 'projectId',
        in: 'path',
        description: 'The id of the project',
        required: true,
        type: 'string',
      },
    ],
    requestBody: {},
    responses: {
      200: {
        description: 'A project by id',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                },
                data: {
                  $ref: '#/components/schemas/Project',
                },
              },
            },
          },
        },
        400: {
          description: 'Invalid project Id ',
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
