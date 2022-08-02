import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
function ExpenseItem(props){
    // let title = props.text

    const [title,setTitle] = useState(props.text)
    function clickHandler(){
        setTitle('updated')
        // title = 'Updated!'
        // console.log(title);
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate d = {props.d}/>
            <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>{props.price}</div>
            </div>
            <button onClick={clickHandler}>change title</button>
        </Card>
    )
}
export default ExpenseItem