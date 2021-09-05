import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
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

        {filteredExpenses.map((item) => (
          <ExpenseItem 
            key={item.id} //Key is a REACT property that helps REACT know what each element is. This is necessary for optimization.
            title={item.title} 
            amount={item.amount} 
            date={item.date}
          />
          ))}
      </Card>
    </div>
  );
}

export default Expenses;
