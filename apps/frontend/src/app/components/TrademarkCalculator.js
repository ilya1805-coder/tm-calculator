'use client';

import { useState } from 'react';
import TrademarkClassList from '@/components/TrademarkClassList';
import TrademarkCalculatorParameters from '@/components/TrademarkCalculatorParameters';
import PriceSummary from '@/components/PriceSummary';
import CalculatorActionButton from '@/components/CalculatorActionButton';

export default function TrademarkCalculator() {
  // TODO: fetch from BE (DB)
  const trademarkClasses = [
    {
      classId: 1,
      description: 'Class 1',
    },
    {
      classId: 2,
      description: 'Class 2',
    },
    {
      classId: 3,
      description: 'Class 3',
    },
    {
      classId: 4,
      description: 'Class 4',
    },
    {
      classId: 5,
      description: 'Class 5',
    },
  ];

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

  //TODO move to helper
  function buildCalculationuery(factors) {
    const selectedClasses = factors.classes
      .filter((c) => c.isSelected)
      .map((c) => c.classId)
      .join(',');

    return new URLSearchParams({
      search: factors.search,
      type: factors.type,
      isColored: factors.isColored,
      multipleApplicants: factors.multipleApplicants,
      isExpress: factors.isExpress,
      classes: selectedClasses,
    }).toString();
  }

  async function handleCalculate(trademarkRegistrationFactors) {
    const query = buildCalculationuery(trademarkRegistrationFactors);
    console.log(query);
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
        applicationPrice="1000"
        registrationPrice="500"
        totalPrice="1500"
      />
      <CalculatorActionButton
        text="Calculate"
        onButtonClick={() => handleCalculate(trademarkRegistrationFactors)}
        disabled={!isClassSelected}
      />
      <CalculatorActionButton
        text="Trademark registration"
        color="green"
        disabled
      />
    </>
  );
}
