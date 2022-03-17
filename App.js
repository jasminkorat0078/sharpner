import ExpenseItem from "./components/ExpenseItem.js";

function App() {
  const expenses = [
    {
      title: "car Insuarance",
      date: new Date(2022, 2, 28),
      amount: 2000,
      location: "ahmedabad",
    },
    {
      title: "home loan",
      date: new Date(2022, 2, 29),
      amount: 15000,
      location: "ahmedabad",
    },
    {
      title: "clothes",
      date: new Date(2022, 2, 30),
      amount: 5000,
      location: "mumbai",
    },
    {
      title: "Misc.",
      date: new Date(2022, 2, 31),
      amount: 8000,
      location: "srinagar",
    },
  ];



  return (
    <div>
      <h2>Let's get started</h2>
  



      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        location={expenses[0].location}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        location={expenses[1].location}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        location={expenses[2].location}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
        location={expenses[3].location}
      ></ExpenseItem>
    </div>
  );
}

export default App;
