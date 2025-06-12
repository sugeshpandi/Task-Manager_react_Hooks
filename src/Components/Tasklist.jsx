<<<<<<< HEAD
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
=======
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
>>>>>>> 5784bb0453f538962d40187beb3929b8f19971b1
