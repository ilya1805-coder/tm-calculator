import Price from '@/models/price.model';
import config from '@/config/index.config.js';

export const getPrice = async (req, res, next) => {
  try {
    const prices = await Price.findOne({
      priceName: req.params.priceName,
    });

    return res.json(prices);
  } catch (err) {
    next(err);
  }
};

export const updatePrice = async (req, res, next) => {
  try {
    const prices = await Price.findOneAndUpdate(
      {
        priceName: config.tmRegistrationPriceName,
      },
      req.body
    );

    return res.json(prices);
  } catch (err) {
    next(err);
  }
};
