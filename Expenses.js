import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import './ExpensesList'
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // let expensesContent = <p>No Content Found!</p>;

  // if(filteredExpenses.length > 0){
  //   expensesContent = filteredExpenses.map((exp) => (
  //     <ExpenseItem
  //       title={exp.title}
  //       amount={exp.amount}
  //       date={exp.date}
  //       location={exp.location}
  //       key={Math.random()}
  //     />
  //   ))

  // } else{
  //   expensesContent=<p>No Content Found!</p>;
  // }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList list = {filteredExpenses} />
        
        {/* {expensesContent} */}
        {/* <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;
