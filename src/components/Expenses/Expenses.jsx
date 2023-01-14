// import ExpenseItem from './ExpenseItem';
import "./Expenses.css";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFilterdFear] = useState("2023");

  const selectedYearHandler = (selectedYear) => {
    setFilterdFear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseChart expenses={props.expenses} filteredExpenses={filteredExpenses} filteredYear={filteredYear}/>
      <ExpensesFilter onChange={selectedYearHandler} selected={filteredYear} />
      <ExpensesList
        filteredExpenses={filteredExpenses}
        filteredYear={filteredYear}
        expenses={props.expenses}
      />
    </Card>
  );
};

export default Expenses;
