'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const SinkingFundCalculator = () => {
  const [goals, setGoals] = useState([
    { name: '', targetAmount: 0, targetDate: '', id: '1' }
  ]);

  const addGoal = () => {
    setGoals([...goals, {
      name: '',
      targetAmount: 0,
      targetDate: '',
      id: Date.now().toString()
    }]);
  };

  const updateGoal = (id: string, field: string, value: string | number) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, [field]: value } : goal
    ));
  };

  const removeGoal = (id: string) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  const calculateMonthlyAmount = (targetAmount: number, targetDate: string) => {
    if (!targetAmount || !targetDate) return 0;
    const today = new Date();
    const target = new Date(targetDate);
    const monthsDiff = (target.getFullYear() - today.getFullYear()) * 12 + 
                      (target.getMonth() - today.getMonth());
    return monthsDiff > 0 ? targetAmount / monthsDiff : 0;
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white">
      <CardHeader className="bg-brand-green-light border-b border-brand-green-secondary p-4">
        <CardTitle className="text-brand-green text-2xl font-semibold">Sinking Fund Calculator</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-4 text-brand-green-secondary italic">
          Add your sinking fund goals below:
        </div>
        
        {goals.map((goal) => (
          <div key={goal.id} className="mb-6 p-4 bg-brand-green-light rounded">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  placeholder="Goal name"
                  value={goal.name}
                  onChange={(e) => updateGoal(goal.id, 'name', e.target.value)}
                  className="flex-1 p-2 border border-brand-green-secondary rounded"
                />
                {goals.length > 1 && (
                  <button
                    onClick={() => removeGoal(goal.id)}
                    className="text-brand-pink hover:text-brand-pink-light"
                  >
                    Remove
                  </button>
                )}
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <label className="block text-sm mb-1">Target Amount</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-brand-green-secondary">£</span>
                    <input
                      type="number"
                      value={goal.targetAmount || ''}
                      onChange={(e) => updateGoal(goal.id, 'targetAmount', parseFloat(e.target.value) || 0)}
                      className="w-full pl-8 pr-4 py-2 border border-brand-green-secondary rounded"
                      placeholder="0"
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <label className="block text-sm mb-1">Target Date</label>
                  <input
                    type="date"
                    value={goal.targetDate}
                    onChange={(e) => updateGoal(goal.id, 'targetDate', e.target.value)}
                    className="w-full p-2 border border-brand-green-secondary rounded"
                  />
                </div>
              </div>

              <div className="mt-2 p-2 bg-brand-pink-light rounded">
                Monthly Amount Needed: £
                {calculateMonthlyAmount(goal.targetAmount, goal.targetDate)
                  .toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={addGoal}
          className="w-full p-2 bg-brand-green text-white rounded hover:bg-brand-green-secondary"
        >
          Add Another Goal
        </button>

        <div className="mt-6 p-4 bg-brand-pink-light rounded">
          <div className="text-xl font-semibold text-brand-pink">
            Total Monthly Saving Needed: £
            {goals.reduce((total, goal) => 
              total + calculateMonthlyAmount(goal.targetAmount, goal.targetDate), 0
            ).toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SinkingFundCalculator;
