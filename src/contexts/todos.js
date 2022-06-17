import React, { useReducer, createContext, useEffect } from 'react';
import toDoReducer, { VisibilityFilters } from './../reducers/todos';

const TodoContext = createContext();

const initialState = {
  filter: VisibilityFilters.SHOW_ALL,
  todos: localStorage.getItem('todos') == null ? [] : JSON.parse(localStorage.getItem('todos')),
};

function TodoContextProvider(props) {
  const [state, dispatch] = useReducer(toDoReducer, initialState);
  const value = { state, dispatch };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state?.todos));
  }, [state?.todos]);

  return <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>;
}
export { TodoContext, TodoContextProvider };
