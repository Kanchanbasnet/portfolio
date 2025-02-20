import express from 'express';
import cors from 'cors';
import { connection } from './connections/mongo.connection';
import ErrorHandler from './middlewares/errors';
import router from './routes/project/project.routes';

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

connection();
app.use(ErrorHandler);

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
