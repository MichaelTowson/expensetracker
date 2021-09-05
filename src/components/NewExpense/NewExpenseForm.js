import React, { useState } from 'react';
import './NewExpenseForm.css'

const NewExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState(''); //Note: .value always returns a string, which is why state is stored as a string.
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  }
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  }
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault(); //prevents form from trying to submit to a server.

    const expenseData = { //Remember, this is a normal variable, not a function.
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate), //new Date is necessary because state only stores strings.
    };

    console.log(expenseData)
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text"
              value ={enteredTitle} 
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" 
              onChange={amountChangeHandler} 
              value = {enteredAmount}
              min="0.01" 
              step="0.01" 
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" 
              onChange={dateChangeHandler}
              value={enteredDate} 
              min="2019-01-01" 
              max="2022-12-31" />
          </div>
        </div>

        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );

};

export default NewExpenseForm;