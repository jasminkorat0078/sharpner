import "./ExpensesList.css";
import "./ExpenseItem";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  if (props.list.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.list.map((exp) => (
        <ExpenseItem
          title={exp.title}
          amount={exp.amount}
          date={exp.date}
          location={exp.location}
          key={Math.random()}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
