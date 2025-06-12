export default function TaskReducer(state, action) {
  if (action.type === 'ADD_TASK') {
    return [...state, action.payload];
  }

  if (action.type === 'UPDATE_TASK') {
    return state.map(task => {

      if (task.id === action.payload.id) {
        return { ...task, ...action.payload.updates };
      } else {
        return task;
      }
    });
  }

  if (action.type === 'DELETE_TASK') {

    return state.filter(task => task.id !== action.payload.id);
  }


  if (action.type === 'MOVE_TASK') {
    return state.map(task => {
      if (task.id === action.payload.id) {

        return { ...task, list: action.payload.newList };
      } else {

        return task;
      }
    });
  }


  if (action.type === 'SET_TASKS') {
    return action.payload;
  }


  return state;
}