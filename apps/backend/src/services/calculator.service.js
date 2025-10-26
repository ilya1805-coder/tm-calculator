import Price from '../models/price.model';
import config from '../config/index.config.js';

export const calculatorService = {
  calculateTrademarkRegistration: async (trademarkRegistrationFactors) => {
    const registrationPrices = await Price.findOne({
      priceName: config.tmRegistrationPriceName,
    });

    let applicationPrice =
      registrationPrices.applicationBase +
      trademarkRegistrationFactors.classes.length *
        registrationPrices.applicationPerClass;
    let registrationPrice =
      registrationPrices.registrationBase +
      trademarkRegistrationFactors.classes.length *
        registrationPrices.registrationPerClass;

    if (trademarkRegistrationFactors.search) {
      applicationPrice += registrationPrices.search;
    }

    if (trademarkRegistrationFactors.multipleApplicants) {
      applicationPrice += registrationPrices.multipleApplicants;
    }

    if (trademarkRegistrationFactors.isExpress) {
      applicationPrice += registrationPrices.isExpress;
    }

    if (trademarkRegistrationFactors.isColored) {
      registrationPrice += registrationPrices.isColored;
    }

    const priceSum = applicationPrice + registrationPrice;
    const totalPrice = registrationPrices.discountPercent
      ? priceSum * ((100 - registrationPrices.discountPercent) / 100)
      : priceSum;

    return {
      applicationPrice,
      registrationPrice,
      totalPrice,
    };
  },
};
