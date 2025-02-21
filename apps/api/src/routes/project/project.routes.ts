import express from 'express';
import { upload } from '../../helper/multer';
import {
  addProject,
  deleteProjectById,
  getProject,
  getProjectById,
  updateProjectById,
} from '../../controllers/project/project.controller';

const router = express.Router();

router.post('/addProject', upload.single('image'), addProject);
router.get('/project', getProject);
router.get('/project/:projectId', getProjectById);
router.patch('/project/:projectId', upload.single('image'), updateProjectById);
router.delete('/project/:projectId', deleteProjectById);

export default router;
