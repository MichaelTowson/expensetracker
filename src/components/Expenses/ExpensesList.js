import React from 'react';

import ExpenseItem from './ExpenseItem'

const ExpensesList = props => {};

return (
  <div>
{filteredExpenses.length > 0 &&
          filteredExpenses.map((item) => (
            <ExpenseItem
              key={item.id} //Key is a REACT property that helps REACT know what each element is. This is necessary for optimization.
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          ))
  </div>
  )}

export default ExpensesList;