import express from 'express';
import { registerUser,getUser,getAllUsers} from '../Controllers/userController.js';
import { upload } from '../Middleware/upload.js';
import { loginUser } from '../Controllers/loginController.js';

const router = express.Router();

router.post('/register', upload.single('profilePic'), registerUser);
router.get('/user/:id', getUser); // Assuming you have a getUser function in your controller
router.get('/users/', getAllUsers);
router.post('/login', loginUser); // Assuming you have a loginUser function in your controller

 // Assuming you have a getUser function in your controller


export default router;
