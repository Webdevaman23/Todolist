import React , {useState} from 'react'

function Todo(props) {
    const [todo , settodo] = useState('');
   
  const handleEnterKey = (e) =>{
    if(e.KeyCode===13){
        props.addlist(todo)
        settodo("")
    }
  }

  return (
    <div className='child-container'>
      <input 
      className="form-control todo me-2" 
      type="text" placeholder='Enter your ToDo'
      value={todo} 
      onChange={e => {
          settodo(e.target.value)
        }}
      onKeyDown={handleEnterKey}>
      </input>

      <button type="button" className="btn btn-primary"
       onClick={()=>{
        props.addlist(todo)
        settodo("")
        }}>
        +
        </button>
    </div>
  )
}

export default Todo
