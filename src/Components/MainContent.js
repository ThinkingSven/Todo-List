import React from "react";
import Highlight from "./Highlight";
import MightDo from "./MightDo";
import { useState } from "react";
import TodoForm from "./TodoForm";
function MainContent() {
  return (
    <div>
      
      <h1 className="headspace">Highlight</h1>
      <TodoForm/>
    </div>
  );
}

export default MainContent;
