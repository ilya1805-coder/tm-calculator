import express from 'express';
import { login, logout } from '@/controllers/auth.controller';
import { loginLimiter } from '@/middlewares/rate-limit.middleware.js';

const router = express.Router();

router.post('/login', loginLimiter, login);
router.post('/logout', logout);

export default router;
