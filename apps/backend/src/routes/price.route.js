import express from 'express';
import { getPrice, updatePrice } from '@/controllers/price.controller';
const router = express.Router();

router.get('/:priceName', getPrice);
router.put('/', updatePrice);

export default router;
