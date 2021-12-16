import React from "react";
import ReactDOM from "react-dom";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Coca Cola",
      amount: 10.5,
      date: new Date(2021, 6, 14),
    },
    {
      id: "e2",
      title: "Pepsi",
      amount: 15.5,
      date: new Date(2021, 3, 24),
    },
    {
      id: "e3",
      title: "Fanta",
      amount: 20.25,
      date: new Date(2020, 9, 26),
    },
    {
      id: "e4",
      title: "New Tivi",
      amount: 293.5,
      date: new Date(2021, 9, 12),
    },
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
