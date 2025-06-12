import React, { useState, useRef } from 'react';
import { useTasks } from '../Context/TaskContext';
import FocusInput from '../FocusInput';


export default function AddTask() {
  const { dispatch } = useTasks();
  const [task, settask] = useState("");
  



  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") {
      console.log("The task is empty. Still can't add");
      return;
    }

    const newtask = {
      id: Date.now(),
      text: task,
      completed: false,
      list: "todo",
      
    };

    dispatch({
      type: 'ADD_TASK',
      payload: newtask
    });

    settask('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className=' border-2  rounded-md m-2'>
        <FocusInput
          value={task}
          onChange={(e) => settask(e.target.value)}
        />
        <button type="submit" className=' bg-black text-white p-1.5 font-semibold cursor-pointer m-2 rounded-lg inline'>Add Task</button>
      </form>
    </div>
  );
}


