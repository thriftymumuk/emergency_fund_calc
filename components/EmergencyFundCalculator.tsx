'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const EmergencyFundCalculator = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [expenses, setExpenses] = useState({
    "mortgage/rent": 0,
    groceries: 0,
    "council tax": 0,
    "fuel/transport": 0,
    "TV/internet": 0,
    water: 0,
    "gas and electric": 0,
    chilcare: 0,
    insurance: 0,
    phone: 0,
    other: 0
  });
  
  const [riskFactors, setRiskFactors] = useState({
    singleIncome: false,
    selfEmployed: false,
    zeroHour: false,
    children: 0,
    adultCaring: false,
    homeowner: false,
    renting: false,
    carRequired: false,
    highRiskJob: false,
    redundancyRisk: false,
    healthCondition: false,
    pets: 0
  });

  const [months, setMonths] = useState(3);
  const totalMonthly = Object.values(expenses).reduce((sum, expense) => sum + expense, 0);

  const calculatePoints = () => {
    let total = 0;
    if (riskFactors.singleIncome) total += 2;
    if (riskFactors.selfEmployed) total += 1;
    if (riskFactors.zeroHour) total += 1;
    total += riskFactors.children;
    if (riskFactors.adultCaring) total += 1;
    if (riskFactors.homeowner) total += 1;
    if (riskFactors.renting) total += 1;
    if (riskFactors.carRequired) total += 1;
    if (riskFactors.highRiskJob) total += 1;
    if (riskFactors.redundancyRisk) total += 1;
    if (riskFactors.healthCondition) total += 2;
    total += (riskFactors.pets >= 3 ? 2 : riskFactors.pets > 0 ? 1 : 0);
    return total;
  };

  const getRecommendedMonths = () => {
    const points = calculatePoints();
    if (points <= 2) return 3;
    if (points <= 4) return 4;
    if (points <= 6) return 5;
    return 6;
  };

  const handleExpenseChange = (category, value) => {
    const numValue = value === '' ? 0 : parseFloat(value);
    setExpenses(prev => ({
      ...prev,
      [category]: numValue
    }));
  };

  const totalEmergencyFund = totalMonthly * (showAdvanced ? getRecommendedMonths() : months);

  return (
    <div className="container mx-auto mt-0">
      <div className="flex flex-col gap-2">
        <img 
          src="./TMlogo.png" 
          alt="Thrifty Mum UK Logo" 
          className="h-40 w-auto mx-auto"
        />
        <Card className="w-full max-w-2xl mx-auto bg-white">
          <CardHeader className="bg-brand-green-light border-b border-brand-green-secondary p-4">
            <div className="flex justify-between items-center">
              <CardTitle className="text-brand-green text-2xl font-semibold">Emergency Fund Calculator</CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-sm text-brand-green">Advanced Mode</span>
                <input 
                  type="checkbox"
                  checked={showAdvanced}
                  onChange={(e) => setShowAdvanced(e.target.checked)}
                  className="h-4 w-4"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 pt-6">
            <div className="mb-4 text-brand-green-secondary italic">Please enter your essential monthly expenses below:</div>
            <div className="space-y-3">
              {Object.entries(expenses).map(([category, value]) => (
                <div key={category} className="flex items-center space-x-4">
                  <label className="w-32 font-medium text-brand-green capitalize">
                    {category}:
                  </label>
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-2 text-brand-green-secondary">£</span>
                    <input
                      type="number"
                      value={value || ''}
                      onChange={(e) => handleExpenseChange(category, e.target.value)}
                      className="w-full pl-8 pr-4 py-2 border border-brand-green-secondary rounded focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-transparent"
                      placeholder="0"
                    />
                  </div>
                </div>
              ))}

              {!showAdvanced ? (
                <div className="flex items-center space-x-4 mt-6">
                  <label className="w-32 font-medium text-brand-green">
                    Months:
                  </label>
                  <select
                    value={months}
                    onChange={(e) => setMonths(parseInt(e.target.value))}
                    className="flex-1 pl-4 pr-8 py-2 border border-brand-green-secondary rounded focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-transparent"
                  >
                    <option value={3}>3 months</option>
                    <option value={4}>4 months</option>
                    <option value={5}>5 months</option>
                    <option value={6}>6 months</option>
                  </select>
                </div>
              ) : (
                <div className="space-y-4 mt-6 p-4 bg-brand-green-light rounded">
                  <h3 className="font-medium text-brand-green mb-1">Risk Assessment</h3>
                  <div className="mb-4 text-brand-green-secondary italic">
                    Select factors that apply to calculate a recommended emergency fund length. This is a guide based on common risk factors.
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={riskFactors.singleIncome}
                        onChange={e => setRiskFactors(prev => ({...prev, singleIncome: e.target.checked}))}
                      />
                      Single Income
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={riskFactors.selfEmployed}
                        onChange={e => setRiskFactors(prev => ({...prev, selfEmployed: e.target.checked}))}
                      />
                      Self Employed
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={riskFactors.zeroHour}
                        onChange={e => setRiskFactors(prev => ({...prev, zeroHour: e.target.checked}))}
                      />
                      Zero-Hour Contract
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={riskFactors.adultCaring}
                        onChange={e => setRiskFactors(prev => ({...prev, adultCaring: e.target.checked}))}
                      />
                      Adult Caring Duties
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={riskFactors.homeowner}
                        onChange={e => setRiskFactors(prev => ({...prev, homeowner: e.target.checked}))}
                      />
                      Homeowner
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={riskFactors.renting}
                        onChange={e => setRiskFactors(prev => ({...prev, renting: e.target.checked}))}
                      />
                      Renting
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={riskFactors.carRequired}
                        onChange={e => setRiskFactors(prev => ({...prev, carRequired: e.target.checked}))}
                      />
                      Car Required for Work
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={riskFactors.highRiskJob}
                        onChange={e => setRiskFactors(prev => ({...prev, highRiskJob: e.target.checked}))}
                      />
                      High-Risk Job
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={riskFactors.redundancyRisk}
                        onChange={e => setRiskFactors(prev => ({...prev, redundancyRisk: e.target.checked}))}
                      />
                      Redundancy Risk
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={riskFactors.healthCondition}
                        onChange={e => setRiskFactors(prev => ({...prev, healthCondition: e.target.checked}))}
                      />
                      Work-Limiting Health
                    </label>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2">
                      Number of children:
                      <input
                        type="number"
                        min="0"
                        value={riskFactors.children || ''}
                        onChange={e => setRiskFactors(prev => ({...prev, children: parseInt(e.target.value) || 0}))}
                        className="w-16 pl-2 pr-2 py-1 border border-brand-green-secondary rounded"
                        placeholder="0"
                      />
                    </label>
                    <label className="flex items-center gap-2">
                      Number of pets:
                      <input
                        type="number"
                        min="0"
                        value={riskFactors.pets || ''}
                        onChange={e => setRiskFactors(prev => ({...prev, pets: parseInt(e.target.value) || 0}))}
                        className="w-16 pl-2 pr-2 py-1 border border-brand-green-secondary rounded"
                        placeholder="0"
                      />
                    </label>
                  </div>

                  <div className="mt-4">
                    <p className="text-brand-green">Recommended Months: {getRecommendedMonths()}</p>
                  </div>
                </div>
              )}
              
              <div className="mt-8 p-4 bg-brand-pink-light rounded-lg">
                <div className="text-brand-green font-medium">Monthly Expenses: £{totalMonthly.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                <div className="text-xl font-semibold text-brand-pink mt-2">
                  Target Emergency Fund: £{totalEmergencyFund.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmergencyFundCalculator;
