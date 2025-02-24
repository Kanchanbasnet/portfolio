import express from 'express';
import { upload } from '../../helper/multer';
import {
  addPersonalInformation,
  deletePersonalInformation,
  updatePersonalInformation,
} from '../../controllers/about/personalInfo.controller';

const router = express.Router();

router.post('/', upload.single('image'), addPersonalInformation);
router.patch('/:id', upload.single('image'), updatePersonalInformation);
router.delete('/:id', deletePersonalInformation);

export default router;
