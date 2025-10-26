import { calculatorService } from '../services/calculator.service.js';

export const calculate = async (req, res, next) => {
  try {
    const calculatedPrices =
      await calculatorService.calculateTrademarkRegistration({
        ...req.parsedQuery,
      });
    res.json(calculatedPrices);
  } catch (err) {
    next(err);
  }
};
