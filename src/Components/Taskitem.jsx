import React, { useState, useRef, useEffect } from 'react'; 
import { useTasks } from '../Context/TaskContext';

export default function Taskitem({ task }) {
  const {dispatch} = useTasks();
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);

  
  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing]);

  let content;
  if (editing) {
    content = <input type="text" defaultValue={task.text} ref={inputRef} />;
  } else {
    content = <span>{task.text}</span>;
  }

  let buttonLabel;
  if (editing) {
    buttonLabel = "Save";
  } else {
    buttonLabel = "Edit";
  }

  const handleEditClick = () => {
    if (editing) {
      const updatedText = inputRef.current.value;
      dispatch({
        type: 'UPDATE_TASK',
        payload: {
          id: task.id,
          updates: {
            text: updatedText
          }
        }
      });
    }
    setEditing(!editing);
  };

  const handleDelete = () => {
    dispatch({
      type: 'DELETE_TASK',
      payload: { id: task.id }
    });
  };

  
  const handleMove = (newList) => {
    dispatch({
      type: 'MOVE_TASK',
      payload: {
        id: task.id,
        newList: newList
      }
    });
  };

  return (
    <div>
      {content}
      <button onClick={handleEditClick}>{buttonLabel}</button>
      <button onClick={handleDelete}>Delete</button>

      
      {task.list === 'todo' && (
        <button onClick={() => handleMove('in-progress')}>Move to In Progress</button>
      )}
      {task.list === 'in-progress' && (
        <>
          <button onClick={() => handleMove('todo')}>Move to To Do</button>
          <button onClick={() => handleMove('done')}>Move to Done</button>
        </>
      )}
      {task.list === 'done' && (
        <button onClick={() => handleMove('in-progress')}>Move back to In Progress</button>
      )}
    </div>
  );
}