import React from 'react'

function Todolist(props) {
  return (
    <div className='list-item'>
      {props.item}
      {/* console.log({props.item}) */}
      <span className='icons' >
        <i className="fa-solid fa-trash-can"
        onClick={()=>{
            props.delete(props.index)
          }}
        >
        </i>
      </span>
    </div>
  )
}

export default Todolist
