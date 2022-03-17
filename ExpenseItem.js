import './ExpenseItem.css'


function ExpenseItem() {
  const ExpenseDate = new Date(2021,2,18);

  const ExpenseTitle = 'Car Insuarance';
  const ExpensePrice =2000;
  const location = 'Ahmedabad';
  return (
    <div className="expense-item">
      <div>{ExpenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{ExpenseTitle}</h2>
        <h2>{location}</h2>
        <div className='expense-item__price'>${ExpensePrice}</div>
        
      </div>
    </div>
  );
}

export default ExpenseItem;
