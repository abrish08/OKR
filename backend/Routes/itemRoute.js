import express from 'express';
import {
  getItemController,
  uploadItemController,
} from '../Controllers/ItemControler.js';
import { upload } from '../Middleware/upload.js';
const router = express.Router();

router.post('/upload', upload.single('file'), uploadItemController);
router.get('/item/:id', getItemController);

export default router;
