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
    <TaskContext.Provider value={{ task, dispatch }}>
      <h1>My Collaborative Task Board</h1>
      <AddTask />
      <Taskboard />
    </TaskContext.Provider>
  );
}
