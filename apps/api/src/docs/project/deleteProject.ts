export const deleteProject = {
  delete: {
    tags: ['Project'],
    description: 'Delete a project by ID',
    summary: 'Delete a project by ID',
    operationId: 'deleteProject',

    parameters: [
      {
        name: 'projectId',
        in: 'path',
        description: 'The ID of the project to delete',
        required: true,
        type: 'string',
      },
    ],
    requestBody: {},
    responses: {
      200: {
        description: 'Project deleted successfully.',
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
          description: 'Project not found.',
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
