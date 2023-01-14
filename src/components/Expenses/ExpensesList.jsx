import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.filteredExpenses.length === 0 && props.filteredYear !== "All") {
    return <h1 className="expenses-list__fallback">No Expenses Found</h1>;
  }

  if (props.filteredExpenses.length > 0) {
    return (
      <ul className="expenses-list">
        {props.filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </ul>
    );
  }

  if (props.filteredYear === "All") {
    return (
      <ul className="expenses-list">
        {props.expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </ul>
    );
  }
};

export default ExpensesList;
