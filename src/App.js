import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const initData = [
  {
    id: "el1",
    title: "Toilet Paper",
    date: new Date(2025, 1, 28),
    amount: 1.4,
  },
  {
    id: "el2",
    title: "Car Insurense",
    date: new Date(2025, 4, 23),
    amount: 1.5,
  },
  {
    id: "el3",
    title: "Laptop",
    date: new Date(2023, 3, 12),
    amount: 300,
  },
  {
    id: "el4",
    title: "New TV",
    date: new Date(2024, 9, 12),
    amount: 500,
  },
];

function App() {
const [user, setUser] = useState(initData) 
const addHandler = (expensItem) => {
 setUser((prevState) => {
  return [
    expensItem,
    ...prevState
  ]
 })
}

  return (
    <div >
      <NewExpense onGet={addHandler}/>
      <Expenses expenses={user}/>
    </div>
  );
}

export default App;
