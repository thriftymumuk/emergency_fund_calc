'use client';
import React, { useState } from 'react';
import EmergencyFundCalculator from './EmergencyFundCalculator';
import SinkingFundCalculator from './SinkingFundCalculator';

const CalculatorSuite = () => {
  const [activeCalculator, setActiveCalculator] = useState('emergency');

  return (
    <div className="container mx-auto mt-0">
      <div className="flex flex-col gap-2">
        <img 
          src="./TMlogo.png" 
          alt="Thrifty Mum UK Logo" 
          className="h-40 w-auto mx-auto"
        />
        
        <div className="w-full max-w-2xl mx-auto mb-4">
          <select
            value={activeCalculator}
            onChange={(e) => setActiveCalculator(e.target.value)}
            className="w-full p-2 border border-brand-green rounded text-brand-green"
          >
            <option value="emergency">Emergency Fund Calculator</option>
            <option value="sinking">Sinking Fund Calculator</option>
          </select>
        </div>

        {activeCalculator === 'emergency' ? (
          <EmergencyFundCalculator />
        ) : (
          <SinkingFundCalculator />
        )}
      </div>
    </div>
  );
};

export default CalculatorSuite;
