export const updateProject = {
  patch: {
    tags: ['Project'],
    description: 'Update a project by ID',
    summary: 'Update a project by ID',
    operationId: 'updateProject',

    parameters: [
      {
        name: 'projectId',
        in: 'path',
        description: 'The ID of the project to update',
        required: true,
        type: 'string',
      },
      {
        name: 'title',
        in: 'formData',
        description: 'The new title of the project',
        required: false,
        type: 'string',
      },
      {
        name: 'techStack',
        in: 'formData',
        description: 'The technologies used in the project',
        required: false,
        type: 'array',
        items: {
          type: 'string',
        },
      },
      {
        name: 'githubLink',
        in: 'formData',
        description: 'The new link to the GitHub repository',
        required: false,
        type: 'string',
      },
      {
        name: 'liveLink',
        in: 'formData',
        description: 'The link to the live version of the project',
        required: false,
        type: 'string',
      },
      {
        name: 'image',
        in: 'formData',
        description: 'The new image file for the project',
        required: false,
        type: 'file',
      },
    ],
    requestBody: {},
    responses: {
      200: {
        description: 'Project updated successfully.',
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
      400: {
        description: 'Invalid parameters or project not found.',
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
};
