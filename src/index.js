import React from 'react';
import ReactDOM from 'react-dom/client';
// import Calculator from './Calculator';
// import ExpenseTracker from './ExpenseTracker';
// import BMI from './BMI';
import ShoppingCart from './Shopping-cart/ShoppingCart';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BMI /> */}
    {/* <Calculator /> */}
    {/* <ExpenseTracker /> */}
    <ShoppingCart />
  </React.StrictMode>
);
