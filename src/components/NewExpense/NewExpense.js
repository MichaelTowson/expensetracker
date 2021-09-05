import React from 'react';
import NewExpenseForm from './NewExpenseForm'
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, //Get all the information that was passed in, and then add ID
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData)
  }

  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;