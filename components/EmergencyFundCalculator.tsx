'use client';
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const EmergencyFundCalculator = () => {
 const [expenses, setExpenses] = useState({
   "mortgage/rent": 0,
   groceries:0,
   "council tax": 0,
   "fuel/transport": 0,
   "TV/internet": 0,
   water: 0,
   "gas and electric": 0,
   chilcare:0,
   insurance:0,
   other:0
 });

 const [months, setMonths] = useState(3);
 const totalMonthly = Object.values(expenses).reduce((sum, expense) => sum + expense, 0);
 const totalEmergencyFund = totalMonthly * months;

 const handleExpenseChange = (category, value) => {
   const numValue = value === '' ? 0 : parseFloat(value);
   setExpenses(prev => ({
     ...prev,
     [category]: numValue
   }));
 };

 return (
     <div className="flex flex-col gap-4">
      <div className="flex justify-center">
       <img 
         src="./TMlogo_long.png" 
         alt="Thrifty Mum UK Logo" 
         className="h-48 w-auto"
       />
     </div>
     <Card className="w-full max-w-2xl mx-auto bg-white">
       <CardHeader className="bg-brand-green-light border-b border-brand-green-secondary p-4">
         <CardTitle className="text-brand-green text-2xl font-semibold">Emergency Fund Calculator</CardTitle>
       </CardHeader>
       <CardContent className="p-6 pt-6">
         <div className="mb-4 text-brand-green-secondary italic">Please enter your monthly essential expenses below:</div>
         <div className="space-y-6">
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
           
           <div className="mt-8 p-4 bg-brand-pink-light rounded-lg">
             <div className="text-brand-green font-medium">Monthly Expenses: £{totalMonthly.toFixed(2)}</div>
             <div className="text-xl font-semibold text-brand-pink mt-2">
               Target Emergency Fund: £{totalEmergencyFund.toFixed(2)}
             </div>
           </div>
         </div>
       </CardContent>
     </Card>
   </div>
 );
};

export default EmergencyFundCalculator;
