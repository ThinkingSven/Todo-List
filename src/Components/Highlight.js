import React from "react";

function Highlight(props) {
  return (
    <div >
      <a className="flex  my-3">
        <input type="checkbox" />
        <p className={props.done ? "text-red-500 line-through" : "text-green-400"}>{props.name}</p>
      </a>
    </div>
  );
}

export default Highlight;
