export const addProject = {
  post: {
    tags: ['Project'],
    description: ' Add a new project',
    summary: 'Add a new project',
    operationId: 'addProject',

    parameters: [
      {
        name: 'title',
        in: 'formData',
        description: 'The title of the project',
        required: true,
        type: 'string',
      },
      {
        name: 'techStack',
        in: 'formData',
        description: 'The technologies used in the project',
        required: true,
        type: 'string',
      },
      {
        name: 'githubLink',
        in: 'formData',
        description: 'The link to the GitHub repository',
        required: true,
        type: 'string',
      },
      {
        name: 'liveLink',
        in: 'formData',
        description: 'The link to the live version of the project',
        required: true,
        type: 'string',
      },
      {
        name: 'image',
        in: 'formData',
        description: 'The image file for the project',
        required: true,
        type: 'file',
      },
    ],
    requestBody: {},

    responses: {
      200: {
        description: 'Project Added Successfully.',
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
          description:
            'Missing project parameters or project with same title already exists.',
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
