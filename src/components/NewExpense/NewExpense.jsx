import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

const saveChangeHandler = (expenses) => {
  const date = {
    ...expenses,
    id: Math.random().toString()
  }
  props.onGet(date)
}



  return (
    <div className='new-expense'>
     <ExpenseForm onChange={saveChangeHandler}/>
    </div>
  );
};

export default NewExpense;