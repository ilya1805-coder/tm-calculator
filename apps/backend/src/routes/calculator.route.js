import express from 'express';
import { calculate } from '@/controllers/calculator.controller';
const router = express.Router();

router.get('/', calculate);

export default router;
