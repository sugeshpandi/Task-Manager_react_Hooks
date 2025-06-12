import React from 'react';
import Tasklist from './Tasklist';
import { useTasks } from '../Context/TaskContext';

export default function Taskboard() {
  const { task } = useTasks();
  return (
    <div className=' flex p-4 justify-between gap-2' >
      <div className='border-1 rounded-l-2xl p-3 bg-blue-100'>
        <h2 className='font-semibold text-3xl mb-3 text-center text-blue-700  ' >To Do</h2>
        <hr />
        <div className='rounded-2xl text-center bg-blue-50 border-b-3'>
          <Tasklist
            tasks={task.filter((t) => t.list === 'todo')}
          />
        </div>

      </div>

      <div className=' border-1 rounded-2xl p-3 bg-yellow-100'>
        <h2 className='font-semibold text-3xl text-yellow-700 mb-3 text-center'>In Progress</h2>
        <hr />
        <div className=' rounded-2xl text-center bg-yellow-50 border-b-3'>
          <Tasklist
            tasks={task.filter((t) => t.list === 'in-progress')}
          />
        </div>
      </div>

      <div className='border-1 rounded-l-2xl p-3 bg-green-100'>
        <h2 className='font-semibold text-3xl text-green-700 mb-3 text-center '>Done</h2>
        <hr />
        <div className=' border-b-3 rounded-2xl text-center bg-green-50'>
          <Tasklist className='bg-black'
            tasks={task.filter((t) => t.list === 'done')}
          />
        </div>
      </div>
    </div>
  );
}
