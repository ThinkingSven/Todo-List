import { MotionConfig } from "framer-motion";
import React, { useState } from "react";
import {motion} from "framer-motion"

function MightDo({todo}) {
  const [done, setDone] = useState(todo.done);
  function handleDone() {
    console.log(todo)
    setDone(done ? false : true);
  }
  return (
    <motion.div
    animate={{
      scale: [1, 1.1, 1],
    }}
      transition={{ duration: 0.5 }}
      onClick={handleDone}
      className={
        done
          ? "todoswag  opacity-50 line-through flex cursor-pointer my-3 p-5 bg-blue-400 rounded-lg text-xl gap-6"
          : "todoswag flex cursor-pointer my-3 p-5 bg-blue-400 rounded-lg text-xl gap-6"
      }
    >
      <input
        type="checkbox"
        checked={done}
        className="form-check-input appearance-none h-5 w-5 border border-white opacity-30 rounded-full bg-white checked:bg-zinc-900 checked:cyan-zinc-900 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
      />
      <p>{todo.name}</p>
    </motion.div>
  );
}

export default MightDo;
