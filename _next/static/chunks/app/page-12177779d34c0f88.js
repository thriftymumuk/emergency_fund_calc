(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4925:function(e,r,n){Promise.resolve().then(n.bind(n,2503))},2503:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return components_EmergencyFundCalculator}});var a=n(7437),t=n(2265);let s=t.forwardRef((e,r)=>{let{className:n,...t}=e;return(0,a.jsx)("div",{ref:r,className:"rounded-lg border bg-white shadow-sm ".concat(n||""),...t})});s.displayName="Card";let l=t.forwardRef((e,r)=>{let{className:n,...t}=e;return(0,a.jsx)("div",{ref:r,className:"flex flex-col space-y-1.5 p-6 ".concat(n||""),...t})});l.displayName="CardHeader";let o=t.forwardRef((e,r)=>{let{className:n,...t}=e;return(0,a.jsx)("h3",{ref:r,className:"text-2xl font-semibold leading-none tracking-tight ".concat(n||""),...t})});o.displayName="CardTitle";let c=t.forwardRef((e,r)=>{let{className:n,...t}=e;return(0,a.jsx)("div",{ref:r,className:"p-6 pt-0 ".concat(n||""),...t})});c.displayName="CardContent";var components_EmergencyFundCalculator=()=>{let[e,r]=(0,t.useState)({"mortgage/rent":0,groceries:0,"council tax":0,"fuel/transport":0,"TV/internet":0,water:0,"gas and electric":0,chilcare:0,insurance:0,other:0}),[n,d]=(0,t.useState)(3),i=Object.values(e).reduce((e,r)=>e+r,0),handleExpenseChange=(e,n)=>{let a=""===n?0:parseFloat(n);r(r=>({...r,[e]:a}))};return(0,a.jsxs)(s,{className:"w-full max-w-2xl mx-auto bg-white",children:[(0,a.jsxs)(l,{className:"bg-brand-green-light border-b border-brand-green-secondary flex items-center gap-4 p-4",children:[(0,a.jsx)("img",{src:"./TMlogo.png",alt:"Thrifty Mum UK Logo",className:"h-16 w-auto"}),(0,a.jsx)(o,{className:"text-brand-green text-2xl font-semibold",children:"Emergency Fund Calculator"})]}),(0,a.jsxs)(c,{className:"p-6 pt-6",children:[(0,a.jsx)("div",{className:"mb-4 text-brand-green-secondary italic",children:"Please enter your monthly essential expenses below:"}),(0,a.jsxs)("div",{className:"space-y-6",children:[Object.entries(e).map(e=>{let[r,n]=e;return(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,a.jsxs)("label",{className:"w-32 font-medium text-brand-green capitalize",children:[r,":"]}),(0,a.jsxs)("div",{className:"relative flex-1",children:[(0,a.jsx)("span",{className:"absolute left-3 top-2 text-brand-green-secondary",children:"\xa3"}),(0,a.jsx)("input",{type:"number",value:n||"",onChange:e=>handleExpenseChange(r,e.target.value),className:"w-full pl-8 pr-4 py-2 border border-brand-green-secondary rounded focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-transparent",placeholder:"0"})]})]},r)}),(0,a.jsxs)("div",{className:"flex items-center space-x-4 mt-6",children:[(0,a.jsx)("label",{className:"w-32 font-medium text-brand-green",children:"Months:"}),(0,a.jsxs)("select",{value:n,onChange:e=>d(parseInt(e.target.value)),className:"flex-1 pl-4 pr-8 py-2 border border-brand-green-secondary rounded focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-transparent",children:[(0,a.jsx)("option",{value:3,children:"3 months"}),(0,a.jsx)("option",{value:4,children:"4 months"}),(0,a.jsx)("option",{value:5,children:"5 months"}),(0,a.jsx)("option",{value:6,children:"6 months"})]})]}),(0,a.jsxs)("div",{className:"mt-8 p-4 bg-brand-pink-light rounded-lg",children:[(0,a.jsxs)("div",{className:"text-brand-green font-medium",children:["Monthly Expenses: \xa3",i.toFixed(2)]}),(0,a.jsxs)("div",{className:"text-xl font-semibold text-brand-pink mt-2",children:["Target Emergency Fund: \xa3",(i*n).toFixed(2)]})]})]})]})]})}},622:function(e,r,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=n(2265),t=Symbol.for("react.element"),s=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),l=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function q(e,r,n){var a,c={},d=null,i=null;for(a in void 0!==n&&(d=""+n),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(i=r.ref),r)s.call(r,a)&&!o.hasOwnProperty(a)&&(c[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps)void 0===c[a]&&(c[a]=r[a]);return{$$typeof:t,type:e,key:d,ref:i,props:c,_owner:l.current}}r.jsx=q,r.jsxs=q},7437:function(e,r,n){"use strict";e.exports=n(622)}},function(e){e.O(0,[971,864,744],function(){return e(e.s=4925)}),_N_E=e.O()}]);