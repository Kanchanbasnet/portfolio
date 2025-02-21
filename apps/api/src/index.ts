import express from 'express';
import cors from 'cors';
import { connection } from './connections/mongo.connection';
// import ErrorHandler from './middlewares/errors';

import router from './routes/project/project.routes';
import blogRouter from './routes/blogs/blogs.routes';
import { customErrorHandler } from './middlewares/errors';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

connection();

app.use('/api', router);
app.use('/api/blog', blogRouter);
app.use(customErrorHandler);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
