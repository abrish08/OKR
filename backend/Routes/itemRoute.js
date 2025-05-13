import express from 'express';
import {
  getItemController,
  uploadItemController,
} from '../Controllers/ItemControler.js';
import { upload } from '../Middleware/upload.js';
import { getInformationController, createInformation, getAllInformationController} from '../Controllers/informationController.js';
const router = express.Router();

router.post('/upload', upload.single('file'), uploadItemController);
router.post('/companyinfo',createInformation );
router.get('/item/:id', getItemController);
router.get('/company/:id',getInformationController)
router.get('/company',getAllInformationController)
// 
export default router;
