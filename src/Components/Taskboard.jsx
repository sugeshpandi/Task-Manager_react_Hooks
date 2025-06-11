import React from 'react';
import Tasklist from './Tasklist';
import { useTasks } from '../Context/TaskContext';

export default function Taskboard() {
  const { task } = useTasks();
  return (
    <div>
      <h2>To Do</h2>
      <Tasklist
        tasks={task.filter((t) => t.list === 'todo')}

      />

      <h2>In Progress</h2>
      <Tasklist
        tasks={task.filter((t) => t.list === 'in-progress')}

      />

      <h2>Done</h2>
      <Tasklist
        tasks={task.filter((t) => t.list === 'done')}

      />
    </div>
  );
}
