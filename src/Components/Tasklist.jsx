import React from 'react';
import Taskitem from './Taskitem';
import { useTasks } from '../Context/TaskContext';


export default function Tasklist({ title, tasks }) {
  const { dispatch } = useTasks();

  return (
    <div>
      <h3>{title}</h3>
      {tasks.map(task => (
        <Taskitem key={task.id} task={task} />
      ))}
    </div>
  );
}
