import './ExpenseDate.css'
function ExpenseDate(props){
    let month = props.d.toLocaleString('en-US',{month : 'long'})
    let day = props.d.toLocaleString('en-US',{day : '2-digit'})
    let year = props.d.getFullYear()
    console.log(month);
    return(
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date__year'>{year}</div>
        </div>
    )
}
export default ExpenseDate