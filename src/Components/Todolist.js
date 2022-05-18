import React from 'react'
import MightDo from './MightDo'
function Todolist({todos}) {
  return (
    <label>
        <div>{todos.map((newtodo) => <MightDo todo={newtodo}/>)}</div>
    </label>
  )
}

export default Todolist