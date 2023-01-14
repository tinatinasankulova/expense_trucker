import './ExpenseDate.css'

const ExpenseDate = (props) => {
  const expenseData = props.date;
  const day = expenseData.toLocaleDateString("ru-Ru", { day: "2-digit" });
  const month = expenseData.toLocaleDateString("ru-Ru", { month: "long" });
  const year = expenseData.getFullYear();
  return (
    <div className='expense-date'>
        <div className='expense-date__day'>{day}</div>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
        
      </div>
  )
}

export default ExpenseDate