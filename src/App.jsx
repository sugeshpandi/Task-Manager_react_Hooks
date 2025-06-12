import React, { useEffect, useReducer } from 'react';
import Taskboard from './Components/Taskboard';
import AddTask from './Components/AddTask';
import TaskReducer from './Reducers/TaskReducer';
import { TaskContext } from './Context/TaskContext';

const initialtask = [
  { id: 1, text: "Learn react", completed: false, list: "todo" },
  { id: 2, text: "Learn Design", completed: true, list: "done" },
  { id: 3, text: "UI/UX", completed: false, list: "in-progress" }
];

export default function App() {
  const [task, dispatch] = useReducer(TaskReducer, initialtask);

  
  useEffect(() => {
    const storedTask = localStorage.getItem('tasks');
    if (storedTask) {
      dispatch({
        type: 'SET_TASKS',
        payload: JSON.parse(storedTask),
      });
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(task));
  }, [task]);

  return (
    <div className=' border-2 p-5 bg-gray-50'>
    <TaskContext.Provider value={{ task, dispatch }}>
      <h1 className=' p-1 font-semibold text-2xl text-center border-2 text-gray-800 bg-linear-65 from-blue-100 to-green-100'>My Collaborative Task Board</h1>
      <AddTask />
      <Taskboard />
    </TaskContext.Provider>
    </div>
  )}
