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

router.post('/', upload.single('image'), addProject);
router.get('/', getProject);
router.get('/:projectId', getProjectById);
router.patch('/:projectId', upload.single('image'), updateProjectById);
router.delete('/:projectId', deleteProjectById);

export default router;
