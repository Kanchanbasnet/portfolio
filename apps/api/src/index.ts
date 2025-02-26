import express from 'express';
import cors from 'cors';
import { connection } from './connections/mongo.connection';

import router from './routes/project/project.routes';
import blogRouter from './routes/blogs/blogs.routes';
import personalInformationRouter from './routes/about/personalInfo.routes';
import aboutRouter from './routes/about/about.routes';
import { customErrorHandler } from './middlewares/errors';
import swaggerUI from 'swagger-ui-express';
import docs from './docs';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

connection();

app.use('/api/projects', router);
app.use('/api/blog', blogRouter);
app.use('/api/personalInformation', personalInformationRouter);
app.use('/api/about', aboutRouter);

app.use(customErrorHandler);
console.log('docs::::', docs);
app.use('/', swaggerUI.serve, swaggerUI.setup(docs));

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
