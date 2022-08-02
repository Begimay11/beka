import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
function Expenses(props){
    return (
        <Card className="expenses">
               <ExpenseItem d = {props.expenses[0].date} text = {props.expenses[0].title} price = {props.expenses[0].amount}/>
               <ExpenseItem d = {props.expenses[1].date} text = {props.expenses[1].title} price = {props.expenses[1].amount}/>
               <ExpenseItem d = {props.expenses[2].date} text = {props.expenses[2].title} price = {props.expenses[2].amount}/>
        </Card>
    )
}
export default Expenses