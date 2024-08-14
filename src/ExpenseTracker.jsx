import React from 'react'
import './ExpenseTracker.css'
import { useState } from 'react'

const ExpenseTracker = () => {

    const [input, setInput] = useState('');
    const [amount, setAmount] = useState('');
    const [expenses, setExpenses] = useState([]);

    const addExpense = () => {
        if (!input || !amount){
            return;
        }
        const newExpense = {
            id: expenses.length + 1,
            title: input,
            amount: amount
        }

        setExpenses([...expenses, newExpense]);
        setInput('');
        setAmount('');
    }

    const deleteExpense = (id) => {
        setExpenses(expenses.filter((expense) => expense.id !== id))
    }

  return (
    <div>
      <h2>Expense Tracker</h2>
      <div>
        <input type='text' placeholder='Expense'
        onChange={(e)=>setInput(e.target.value)}
        value={input}></input>
        <input type='number' 
        placeholder='Amount'
        value={amount}
        onChange={(e)=>setAmount(e.target.value)}
        ></input>
        <button 
        onClick={addExpense}>
            Add Expense
        </button>

        <ul className='expense-list'>
            {
                expenses.map((expense)=>(
                    <li key={expense.id}>
                        <span>{expense.title}</span>
                        <span>{expense.amount}</span>
                    <button 
                    onClick={()=>deleteExpense(expense.id)}
                    >Delete</button>
                    </li>
                ))
            }
        </ul>
      </div>
    </div>
  )
}

export default ExpenseTracker
