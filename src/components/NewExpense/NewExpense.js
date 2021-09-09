import React, { useState } from 'react';
import NewExpenseForm from './NewExpenseForm'
import './NewExpense.css';

const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, //Get all the information that was passed in, and then add ID
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData)
    setIsEditing(false);
  }

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {/* If not in the state of adding an expense" */}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}

      {/* If in the state of adding an expense" */}
      {isEditing && (
        <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />
      )}
    </div>
  );
};

export default NewExpense;