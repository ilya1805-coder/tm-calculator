'use client';

import RadioGroup from '@/components/RadioGroup';
import InfoIcon from '@/components/InfoIcon';

export default function TrademarkCalculatorParameters({
  trademarkRegistrationFactors,
  setTrademarkRegistrationFactors,
}) {
  function handleParameterChange(name, newValue) {
    setTrademarkRegistrationFactors({
      ...trademarkRegistrationFactors,
      [name]: newValue,
    });
  }

  return (
    <div className="flex flex-wrap gap-6 text-sm">
      <div className="flex flex-col gap-1 min-w-[100px]">
        <p className="font-medium mb-1">
          Search
          <InfoIcon description="It is recommended that you conduct a search before submitting an application to verify the presence of identical and similar brands, as well as evaluate possible substitutes for your claim." />
        </p>
        <RadioGroup
          name="search"
          value={trademarkRegistrationFactors.search}
          options={[
            { value: true, label: 'Yes' },
            { value: false, label: 'No' },
          ]}
          onChange={(value) => handleParameterChange('search', value)}
        />
      </div>

      <div className="flex flex-col gap-1 min-w-[120px]">
        <p className="font-medium mb-1">
          Type
          <InfoIcon description="It is recommended that you conduct a search before submitting an application to verify the presence of identical and similar brands, as well as evaluate possible substitutes for your claim." />
        </p>
        <RadioGroup
          name="type"
          value={trademarkRegistrationFactors.type}
          options={[
            { value: 'word', label: 'Word' },
            { value: 'image', label: 'Image' },
            { value: 'combined', label: 'Combined' },
          ]}
          onChange={(value) => handleParameterChange('type', value)}
        />
      </div>

      <div className="flex flex-col gap-1 min-w-[100px]">
        <p className="font-medium mb-1">
          Colored
          <InfoIcon description="It is recommended that you conduct a search before submitting an application to verify the presence of identical and similar brands, as well as evaluate possible substitutes for your claim." />
        </p>
        <RadioGroup
          name="isColored"
          value={trademarkRegistrationFactors.isColored}
          options={[
            { value: true, label: 'Yes' },
            { value: false, label: 'No' },
          ]}
          onChange={(value) => handleParameterChange('isColored', value)}
        />
      </div>

      <div className="flex flex-col gap-1 min-w-[140px]">
        <p className="font-medium mb-1">
          Multiple applicants
          <InfoIcon description="It is recommended that you conduct a search before submitting an application to verify the presence of identical and similar brands, as well as evaluate possible substitutes for your claim." />
        </p>
        <RadioGroup
          name="multipleApplicants"
          value={trademarkRegistrationFactors.multipleApplicants}
          options={[
            { value: true, label: 'Yes' },
            { value: false, label: 'No' },
          ]}
          onChange={(value) =>
            handleParameterChange('multipleApplicants', value)
          }
        />
      </div>

      <div className="flex flex-col gap-1 min-w-[140px]">
        <p className="font-medium mb-1">
          Express registration
          <InfoIcon description="It is recommended that you conduct a search before submitting an application to verify the presence of identical and similar brands, as well as evaluate possible substitutes for your claim." />
        </p>
        <RadioGroup
          name="isExpress"
          value={trademarkRegistrationFactors.isExpress}
          options={[
            { value: true, label: 'Yes' },
            { value: false, label: 'No' },
          ]}
          onChange={(value) => handleParameterChange('isExpress', value)}
        />
      </div>
    </div>
  );
}
