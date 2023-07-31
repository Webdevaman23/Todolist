import Todo from './components/Todo';
import './App.css';
import { useState } from 'react';
import Todolist from './components/Todolist';

function App() {
  const [todolist , settodolist] = useState([]);
  const addlist = (inputtext) =>{
    if(inputtext !== ''){
      settodolist([...todolist , inputtext]);
    }
  }


  function deleteitem(key) {
    let newtodolist = [...todolist];
    newtodolist.splice(key , 1);
    settodolist([...newtodolist]);
  }

  return (
    <div className="container">
      <h1 className='header'>ToDoList
      <hr style={{color : 'cyan'}} />
      </h1>
        <Todo addlist={addlist}/>
     {todolist.map((listitem , i)=>{
      return(
        <Todolist key={i} item={listitem} delete={deleteitem} index={i}/>
      )
     })}
    </div>
  );
}

export default App;
