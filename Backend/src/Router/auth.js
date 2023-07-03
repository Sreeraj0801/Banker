import express from 'express';
const router = express.Router();

import { authController,loginController } from '../Controller/authController.js';

router.post('/',authController);

router.post('/login',loginController)

export default router;
