import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('') 
  const [date, setDate] = useState('') 

const titleChangeHandler = (event) => {
  setTitle(event.target.value)
}

  const amountChangeHandler = (event) => {
    setAmount(event.target.value)
  };

  const dateChangeHandler = (event) => {
   setDate(event.target.value)
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newData = {
      title,
      amount: Number(amount),
      date: new Date(date)
    }

    props.onChange(newData)

    setTitle('')
    setAmount('')
    setDate('')
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title </label>{" "}
          <input name="title" type="text" onChange={titleChangeHandler} value={title}/>
        </div>
        <div className="new-expense__control">
          <label>Amount </label>{" "}
          <input
            value={amount}
            name="amount"
            type="number"
            min={"1"}
            step="1"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date </label>{" "}
          <input
            value={date}
            name="date"
            type="date"
            max={"2026-12-31"}
            min="2023-01-01"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions ">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
