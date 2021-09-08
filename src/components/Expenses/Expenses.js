import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selection) => {
      setFilteredYear(selection);
    };

    const filteredExpenses = props.items.filter(item => {
      return item.date.getFullYear().toString() === filteredYear;
    });
  
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.length === 0 && (
          <p>No expenses found for this year.</p>
        )}
          ))
      </Card>
    </div>
  );
}

export default Expenses;
