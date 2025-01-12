import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Info } from 'lucide-react';

const EmergencyFundCalculator = () => {
  const [expenses, setExpenses] = useState({
    housing: 0,
    utilities: 0,
    food: 0,
    transport: 0,
    other: 0
  });
  
  const [months, setMonths] = useState(3);
  const [showInfo, setShowInfo] = useState(false);
  
  const monthlyTotal = Object.values(expenses).reduce((sum, value) => sum + value, 0);
  const emergencyFund = monthlyTotal * months;
  
  const handleExpenseChange = (category, value) => {
    setExpenses(prev => ({
      ...prev,
      [category]: parseFloat(value) || 0
    }));
  };
  
  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-lg">
      <CardHeader className="space-y-1 p-4">
        <CardTitle className="text-xl font-bold text-center">Emergency Fund Calculator</CardTitle>
        <p className="text-sm text-center text-gray-600">Calculate your recommended emergency savings</p>
      </CardHeader>
      
      <CardContent className="space-y-4 p-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold">Monthly Expenses</h3>
            <button 
              className="text-gray-500 hover:text-gray-700 p-2"
              onClick={() => setShowInfo(!showInfo)}
            >
              <Info size={24} />
            </button>
          </div>
          
          {showInfo && (
            <div className="p-3 bg-blue-50 rounded-lg text-sm text-blue-800">
              Include your essential monthly expenses only
            </div>
          )}
          
          {Object.entries(expenses).map(([category, value]) => (
            <div key={category} className="space-y-1">
              <label className="block text-sm font-medium capitalize">{category}:</label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500">£</span>
                <input
                  type="number"
                  value={value || ''}
                  onChange={(e) => handleExpenseChange(category, e.target.value)}
                  className="w-full pl-8 pr-4 py-3 text-lg border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="0"
                  min="0"
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="space-y-2 pt-2">
          <label className="block text-sm font-medium">Months of expenses to save:</label>
          <div className="grid grid-cols-3 gap-2">
            {[3, 6, 12].map((num) => (
              <button
                key={num}
                onClick={() => setMonths(num)}
                className={`py-3 rounded-lg text-center ${
                  months === num 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {num} months
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-gray-50 rounded-lg space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Monthly Total:</span>
            <span className="font-semibold">£{monthlyTotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Target Fund:</span>
            <span className="text-xl font-bold text-blue-600">
              £{emergencyFund.toLocaleString()}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmergencyFundCalculator;
