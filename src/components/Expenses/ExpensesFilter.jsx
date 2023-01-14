import './ExpensesFilter.css'

const ExpensesFilter = (props) => {

  const onCahgHandler = (event) => {
     props.onChange(event.target.value)
  }
  return(
    <div  className='expenses-filter'>
     <div className='expenses-filter__control'> 
      <label>Filter by year</label>
      <select onChange={onCahgHandler} value={props.selected}>
        <option value="2026">2026</option>
        <option value="2025">2025</option>
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="All">All</option>
      </select>
      </div>
    </div>
  )
}

export default ExpensesFilter;