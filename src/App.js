import ExpenseItem from './components/Expenses/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';
import Expenses from './components/Expenses/Expenses';

function App() {

const expenses = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  }
]
  console.log(expenses[0]);
  return (
    <div className="App">
      <NewExpense/>
      <Expenses expenses ={expenses}/>
   {/* <ExpenseItem d = {expenses[0].date} text = {expenses[0].title} price = {expenses[0].amount}/>
   <ExpenseItem d = {expenses[1].date} text = {expenses[1].title} price = {expenses[1].amount}/>
   <ExpenseItem d = {expenses[2].date} text = {expenses[2].title} price = {expenses[2].amount}/> */}

   {/* {expenses.map((element,index)=>{
     return(
       <ExpenseItem key= {element.id} d = {element.date} text = {element.title} price ={element.amount}/>
     )
   })} */}
    </div>
  );
}

export default App;
