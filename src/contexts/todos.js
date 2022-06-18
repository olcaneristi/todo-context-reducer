import React, { useReducer, createContext, useEffect } from 'react';
import todoReducer, { TodoFilters } from './../reducers/todos';

const TodoContext = createContext();

const initialState = {
  filter: TodoFilters.SHOW_ALL_TODOS,
  todos: localStorage.getItem('todos') === null ? [] : JSON.parse(localStorage.getItem('todos')),
};

function TodoContextProvider(props) {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const value = { state, dispatch };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state?.todos));
  }, [state?.todos]);

  return <TodoContext.Provider value={value}>{props.children}</TodoContext.Provider>;
}
export { TodoContext, TodoContextProvider };
