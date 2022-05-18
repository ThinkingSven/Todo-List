import React from "react";
import Highlight from "./Highlight";
import MightDo from "./MightDo";

function MainContent() {
  let todo = [
    { name: "Clean room", done: false, highlight: false },
    { name: "Homework", done: true, highlight: false },
    { name: "Code SearchAlgorithm", done: false, highlight: false },
    { name: "Code Database", done: true, highlight: false },
  ];
  return (
    <div>
      <h1 className="headspace">Highlight</h1>
      {todo.map((newtodo) => {
        if(newtodo.highlight == false) {
          return <MightDo name={newtodo.name} done={newtodo.done} />;
        } else {
          return <Highlight name={newtodo.name} done={newtodo.done} />;
        }

      })}
      <input  className=" text-black p-1"/>
      <input type="submit" className="m-4"/>
    </div>
  );
}

export default MainContent;
