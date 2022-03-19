import Card from "../UI/card";
import ExpenseDate  from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  var title = props.title;

  const clickHandler = ()=>{
    title = 'updated';
    console.log(title);
  }
  const deleteHandler=()=>{
    console.log("deleted");
  }
 
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <h2>{props.location}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>change title</button>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
