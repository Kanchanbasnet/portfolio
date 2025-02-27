import { addProject } from './addproject';
import { deleteProject } from './deleteProject';
import { updateProject } from './updateproject';
import { getProject } from './getProject';
import { getProjectById } from './getProject';

export const projectsPath = {
  '/projects': {
    ...addProject,
    ...getProject,
  },
  '/projects/:projectId': {
    ...deleteProject,
    ...updateProject,
    ...getProjectById,
  },
};
