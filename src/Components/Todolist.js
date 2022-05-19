import React from 'react'
import uuid from 'react-uuid'
import MightDo from './MightDo'
function Todolist({todos}) {
  return (
    <label>
        <div>{todos.map((newtodo) => <MightDo todo={newtodo} key={uuid()}/>)}</div>
    </label>
  )
}

export default Todolist