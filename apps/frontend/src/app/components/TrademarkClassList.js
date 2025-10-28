'use client';

import TrademarkClass from '@/components/TrademarkClass';

export default function TrademarkClassList({
  trademarkRegistrationFactors,
  setTrademarkRegistrationFactors,
}) {
  const classes = trademarkRegistrationFactors.classes;

  function handleClassClick(classId) {
    setTrademarkRegistrationFactors((prev) => ({
      ...prev,
      classes: prev.classes.map((trademarkClass) => {
        if (trademarkClass.classId === classId) {
          return { ...trademarkClass, isSelected: !trademarkClass.isSelected };
        }
        return trademarkClass;
      }),
    }));
  }

  return (
    <div className="flex flex-wrap gap-2">
      {classes.map((trademarkClass) => (
        <TrademarkClass
          key={trademarkClass.classId}
          classId={trademarkClass.classId}
          description={trademarkClass.description}
          isSelected={trademarkClass.isSelected}
          onClassClick={() => handleClassClick(trademarkClass.classId)}
        />
      ))}
    </div>
  );
}
