import express from 'express';
import { upload } from '../../helper/multer';
import { addproject } from '../../controllers/project/project.controller';

const router = express.Router();

router.post('/addProject', upload.single('image'), addproject);

export default router;
