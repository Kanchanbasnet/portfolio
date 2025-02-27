import { BlogSchema } from './blogs/blogComponent';
import { ProjectSchema } from './project/projectComponent';

export const components = {
  components: {
    schemas: {
      Project: ProjectSchema,
      Blog: BlogSchema,
    },
  },
};
