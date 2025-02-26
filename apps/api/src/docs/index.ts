import { paths } from './path';
import { tags } from './tags';
import { servers } from './servers';
import { openapi } from './basicInfo';
import { components } from './components';

const docs = {
  ...openapi,
  servers,
  tags,
  paths,
  ...components,
};

export default docs;
