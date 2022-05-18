import React from "react";
import { useState } from "react";

function TodoForm() {
  const [input, setInput] = useState("");
  function handleChange(event) {
    setInput(event.target.value);
    console.log(input);
  }
  function handleClick() {
    
  }
  return (
    <div>
      <input
        className=" text-black p-1"
        value={input}
        onChange={handleChange}
      />
      <input type="submit" onClick={handleClick} className="m-4" />
    </div>
  );
}

export default TodoForm;
