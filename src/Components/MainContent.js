import React from "react";
import Todolist from "./Todolist";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import uuid from 'react-uuid'

const LOCAL_STORAGE_KEY = "todoApp.todos";

function MainContent() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name == "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { key: uuid(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
    console.log(todos)
  }
  function handleEnter(event) {
    if(event.keyCode === 13){
      console.log("enter pressed")
     handleAddTodo(todoNameRef);
    } else {return(console.log("???"))}
  }
  function handleDelete() {
    setTodos(() => {
      return [];
    });
    todoNameRef.current.value = null;
  }
  return (
    <div>
      <h1 className="headspace">
        <a>Highlight</a>
      </h1>
      <Todolist todos={todos} />
      <input
        className=" text-white bg-transparent w-full border border-zinc-900 focus:outline-none cursor-pointer my-4 p-3 rounded-lg text-xl gap-6 block"
        ref={todoNameRef}
        type="text"
        onKeyPress={handleEnter}
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleAddTodo}
        className="todoswag mr-4 p-4 rounded-lg"
      >
        <p>Add todo</p>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleDelete}
        className="bg-red-400 p-4 rounded-lg"
      >
        <p>Clear</p>
      </motion.button>
    </div>
  );
}

export default MainContent;
