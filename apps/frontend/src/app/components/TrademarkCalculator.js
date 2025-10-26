'use client';

import { useState } from 'react';
import TrademarkClassList from '@/components/TrademarkClassList';
import TrademarkCalculatorParameters from '@/components/TrademarkCalculatorParameters';
import PriceSummary from '@/components/PriceSummary';
import CalculatorActionButton from '@/components/CalculatorActionButton';

export default function TrademarkCalculator({ trademarkClasses }) {
  const [trademarkRegistrationFactors, setTrademarkRegistrationFactors] =
    useState({
      search: false,
      type: 'word',
      isColored: false,
      multipleApplicants: false,
      isExpress: false,
      classes: trademarkClasses.map((trademarkClass) => ({
        ...trademarkClass,
        isSelected: false,
      })),
    });
  const isClassSelected = trademarkRegistrationFactors.classes.filter(
    (trademarkClass) => trademarkClass.isSelected
  ).length;

  const [calculatedPrices, setCalculatedPrices] = useState({
    applicationPrice: 0,
    registrationPrice: 0,
    totalPrice: 0,
  });

  //TODO move to helper
  function buildCalculationUrl(factors) {
    const selectedClasses = factors.classes
      .filter((c) => c.isSelected)
      .map((c) => c.classId)
      .join(',');

    const query = new URLSearchParams({
      search: factors.search,
      type: factors.type,
      isColored: factors.isColored,
      multipleApplicants: factors.multipleApplicants,
      isExpress: factors.isExpress,
      classes: selectedClasses,
    }).toString();

    return `${process.env.NEXT_PUBLIC_BACKEND_URL}/calculate?${query}`;
  }

  async function handleCalculate(trademarkRegistrationFactors) {
    const calculationUrl = buildCalculationUrl(trademarkRegistrationFactors);
    const calculatedPricesResponse = await fetch(calculationUrl);
    if (!calculatedPricesResponse.ok) {
      //TODO show error somewhere in UI
      throw new Error('Something went wrong');
    }

    const calculatedPricesFromResponse = await calculatedPricesResponse.json();
    setCalculatedPrices(calculatedPricesFromResponse);
  }

  return (
    <>
      <TrademarkCalculatorParameters
        trademarkRegistrationFactors={trademarkRegistrationFactors}
        setTrademarkRegistrationFactors={setTrademarkRegistrationFactors}
      />
      <TrademarkClassList
        trademarkRegistrationFactors={trademarkRegistrationFactors}
        setTrademarkRegistrationFactors={setTrademarkRegistrationFactors}
      />
      <PriceSummary
        applicationPrice={calculatedPrices.applicationPrice}
        registrationPrice={calculatedPrices.registrationPrice}
        totalPrice={calculatedPrices.totalPrice}
      />
      <CalculatorActionButton
        text="Calculate"
        onButtonClick={() => handleCalculate(trademarkRegistrationFactors)}
        disabled={!isClassSelected}
      />
    </>
  );
}
