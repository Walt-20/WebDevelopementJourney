import express from 'express';
const router = express.Router();
import userController from '../controller/userController.js';

router.post('/register', userController.register);

export default router;