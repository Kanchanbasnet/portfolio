import express from 'express';
import { upload } from '../../helper/multer';
import { addProject, getProject, getProjectById } from '../../controllers/project/project.controller';

const router = express.Router();

router.post('/addProject', upload.single('image'), addProject);
router.get('/project', getProject);
router.get('/project/:projectId', getProjectById);

export default router;
