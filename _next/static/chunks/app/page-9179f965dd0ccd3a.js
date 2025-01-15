(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4925:function(e,n,a){Promise.resolve().then(a.bind(a,2503))},2503:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return components_EmergencyFundCalculator}});var s=a(7437),r=a(2265);let t=r.forwardRef((e,n)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:n,className:"rounded-lg border bg-white shadow-sm ".concat(a||""),...r})});t.displayName="Card";let c=r.forwardRef((e,n)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:n,className:"flex flex-col space-y-1.5 p-6 ".concat(a||""),...r})});c.displayName="CardHeader";let l=r.forwardRef((e,n)=>{let{className:a,...r}=e;return(0,s.jsx)("h3",{ref:n,className:"text-2xl font-semibold leading-none tracking-tight ".concat(a||""),...r})});l.displayName="CardTitle";let i=r.forwardRef((e,n)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:n,className:"p-6 pt-0 ".concat(a||""),...r})});i.displayName="CardContent";var components_EmergencyFundCalculator=()=>{let[e,n]=(0,r.useState)(!1),[a,o]=(0,r.useState)({"mortgage/rent":0,groceries:0,"council tax":0,"fuel/transport":0,"TV/internet":0,water:0,"gas and electric":0,chilcare:0,insurance:0,phone:0,other:0}),[d,m]=(0,r.useState)({singleIncome:!1,selfEmployed:!1,zeroHour:!1,children:0,adultCaring:!1,homeowner:!1,renting:!1,carRequired:!1,highRiskJob:!1,redundancyRisk:!1,healthCondition:!1,pets:0}),[h,u]=(0,r.useState)(3),x=Object.values(a).reduce((e,n)=>e+n,0),calculatePoints=()=>{let e=0;return d.singleIncome&&(e+=2),d.selfEmployed&&(e+=1),d.zeroHour&&(e+=1),e+=d.children,d.adultCaring&&(e+=1),d.homeowner&&(e+=1),d.renting&&(e+=1),d.carRequired&&(e+=1),d.highRiskJob&&(e+=1),d.redundancyRisk&&(e+=1),d.healthCondition&&(e+=2),e+=d.pets>=3?2:d.pets>0?1:0},getRecommendedMonths=()=>{let e=calculatePoints();return e<=2?3:e<=4?4:e<=6?5:6},handleExpenseChange=(e,n)=>{let a=""===n?0:parseFloat(n);o(n=>({...n,[e]:a}))},p=x*(e?getRecommendedMonths():h);return(0,s.jsx)("div",{className:"container mx-auto mt-0",children:(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)("img",{src:"./TMlogo.png",alt:"Thrifty Mum UK Logo",className:"h-40 w-auto mx-auto"}),(0,s.jsxs)(t,{className:"w-full max-w-2xl mx-auto bg-white",children:[(0,s.jsx)(c,{className:"bg-brand-green-light border-b border-brand-green-secondary p-4",children:(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsx)(l,{className:"text-brand-green text-2xl font-semibold",children:"Emergency Fund Calculator"}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)("span",{className:"text-sm text-brand-green",children:"Advanced Mode"}),(0,s.jsx)("input",{type:"checkbox",checked:e,onChange:e=>n(e.target.checked),className:"h-4 w-4"})]})]})}),(0,s.jsxs)(i,{className:"p-6 pt-6",children:[(0,s.jsx)("div",{className:"mb-4 text-brand-green-secondary italic",children:"Please enter your essential monthly expenses below:"}),(0,s.jsxs)("div",{className:"space-y-3",children:[Object.entries(a).map(e=>{let[n,a]=e;return(0,s.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,s.jsxs)("label",{className:"w-32 font-medium text-brand-green capitalize",children:[n,":"]}),(0,s.jsxs)("div",{className:"relative flex-1",children:[(0,s.jsx)("span",{className:"absolute left-3 top-2 text-brand-green-secondary",children:"\xa3"}),(0,s.jsx)("input",{type:"number",value:a||"",onChange:e=>handleExpenseChange(n,e.target.value),className:"w-full pl-8 pr-4 py-2 border border-brand-green-secondary rounded focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-transparent",placeholder:"0"})]})]},n)}),e?(0,s.jsxs)("div",{className:"space-y-4 mt-6 p-4 bg-brand-green-light rounded",children:[(0,s.jsx)("h3",{className:"font-medium text-brand-green mb-4",children:"Risk Assessment"}),(0,s.jsx)("div",{className:"mb-4 text-brand-green-secondary italic",children:"Select factors that apply to calculate a recommended emergency fund length. This is a guide based on common risk factors."}),(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,s.jsxs)("label",{className:"flex items-center gap-2",children:[(0,s.jsx)("input",{type:"checkbox",checked:d.singleIncome,onChange:e=>m(n=>({...n,singleIncome:e.target.checked}))}),"Single Income"]}),(0,s.jsxs)("label",{className:"flex items-center gap-2",children:[(0,s.jsx)("input",{type:"checkbox",checked:d.selfEmployed,onChange:e=>m(n=>({...n,selfEmployed:e.target.checked}))}),"Self Employed"]}),(0,s.jsxs)("label",{className:"flex items-center gap-2",children:[(0,s.jsx)("input",{type:"checkbox",checked:d.zeroHour,onChange:e=>m(n=>({...n,zeroHour:e.target.checked}))}),"Zero-Hour Contract"]}),(0,s.jsxs)("label",{className:"flex items-center gap-2",children:[(0,s.jsx)("input",{type:"checkbox",checked:d.adultCaring,onChange:e=>m(n=>({...n,adultCaring:e.target.checked}))}),"Adult Caring Duties"]}),(0,s.jsxs)("label",{className:"flex items-center gap-2",children:[(0,s.jsx)("input",{type:"checkbox",checked:d.homeowner,onChange:e=>m(n=>({...n,homeowner:e.target.checked}))}),"Homeowner"]}),(0,s.jsxs)("label",{className:"flex items-center gap-2",children:[(0,s.jsx)("input",{type:"checkbox",checked:d.renting,onChange:e=>m(n=>({...n,renting:e.target.checked}))}),"Renting"]}),(0,s.jsxs)("label",{className:"flex items-center gap-2",children:[(0,s.jsx)("input",{type:"checkbox",checked:d.carRequired,onChange:e=>m(n=>({...n,carRequired:e.target.checked}))}),"Car Required for Work"]}),(0,s.jsxs)("label",{className:"flex items-center gap-2",children:[(0,s.jsx)("input",{type:"checkbox",checked:d.highRiskJob,onChange:e=>m(n=>({...n,highRiskJob:e.target.checked}))}),"High-Risk Job"]}),(0,s.jsxs)("label",{className:"flex items-center gap-2",children:[(0,s.jsx)("input",{type:"checkbox",checked:d.redundancyRisk,onChange:e=>m(n=>({...n,redundancyRisk:e.target.checked}))}),"Redundancy Risk"]}),(0,s.jsxs)("label",{className:"flex items-center gap-2",children:[(0,s.jsx)("input",{type:"checkbox",checked:d.healthCondition,onChange:e=>m(n=>({...n,healthCondition:e.target.checked}))}),"Work-Limiting Health"]})]}),(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[(0,s.jsxs)("label",{className:"flex items-center gap-2",children:["Number of children:",(0,s.jsx)("input",{type:"number",min:"0",value:d.children||"",onChange:e=>m(n=>({...n,children:parseInt(e.target.value)||0})),className:"w-16 pl-2 pr-2 py-1 border border-brand-green-secondary rounded",placeholder:"0"})]}),(0,s.jsxs)("label",{className:"flex items-center gap-2",children:["Number of pets:",(0,s.jsx)("input",{type:"number",min:"0",value:d.pets||"",onChange:e=>m(n=>({...n,pets:parseInt(e.target.value)||0})),className:"w-16 pl-2 pr-2 py-1 border border-brand-green-secondary rounded",placeholder:"0"})]})]}),(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsxs)("p",{className:"text-brand-green",children:["Recommended Months: ",getRecommendedMonths()]})})]}):(0,s.jsxs)("div",{className:"flex items-center space-x-4 mt-6",children:[(0,s.jsx)("label",{className:"w-32 font-medium text-brand-green",children:"Months:"}),(0,s.jsxs)("select",{value:h,onChange:e=>u(parseInt(e.target.value)),className:"flex-1 pl-4 pr-8 py-2 border border-brand-green-secondary rounded focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-transparent",children:[(0,s.jsx)("option",{value:3,children:"3 months"}),(0,s.jsx)("option",{value:4,children:"4 months"}),(0,s.jsx)("option",{value:5,children:"5 months"}),(0,s.jsx)("option",{value:6,children:"6 months"})]})]}),(0,s.jsxs)("div",{className:"mt-8 p-4 bg-brand-pink-light rounded-lg",children:[(0,s.jsxs)("div",{className:"text-brand-green font-medium",children:["Monthly Expenses: \xa3",x.toLocaleString("en-GB",{minimumFractionDigits:2,maximumFractionDigits:2})]}),(0,s.jsxs)("div",{className:"text-xl font-semibold text-brand-pink mt-2",children:["Target Emergency Fund: \xa3",p.toLocaleString("en-GB",{minimumFractionDigits:2,maximumFractionDigits:2})]})]})]})]})]})]})})}},622:function(e,n,a){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=a(2265),r=Symbol.for("react.element"),t=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function q(e,n,a){var s,i={},o=null,d=null;for(s in void 0!==a&&(o=""+a),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(d=n.ref),n)t.call(n,s)&&!l.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:r,type:e,key:o,ref:d,props:i,_owner:c.current}}n.jsx=q,n.jsxs=q},7437:function(e,n,a){"use strict";e.exports=a(622)}},function(e){e.O(0,[971,864,744],function(){return e(e.s=4925)}),_N_E=e.O()}]);