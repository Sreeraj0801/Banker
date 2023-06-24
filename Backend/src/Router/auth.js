import express from 'express';
const router = express.Router();

import { authController } from '../Controller/authController.js';

router.post('/',authController);

export default router;
