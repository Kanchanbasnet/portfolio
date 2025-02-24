import express from 'express';
import {
  addAbout,
  deleteAbout,
  updateAbout,
} from '../../controllers/about/about.controller';

const router = express.Router();

router.post('/', addAbout);
router.patch('/:id', updateAbout);
router.delete('/:id', deleteAbout);

export default router;
