import React from 'react'
import { useState } from "react";

function MightDo(props) {
  let [isdone, setdone] = useState(props.done)

  return (
    <div className='flex cursor-pointer my-3 transition-all duration-300'>
      <input type="checkbox" className='outline-none '/>
      <p onClick={() => {setdone(isdone = !isdone)}} className={isdone ? " text-zinc-600 " : "text-green line-through"}>{props.name}</p>
    </div>
  )
}

export default MightDo