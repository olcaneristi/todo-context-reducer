import React, { useContext } from 'react';
import Button from './Button';
import { IconMenu, IconMenuFill } from '../assets/icons/Icons';
import { CHANGE_FILTER, TodoFilters } from '../reducers/todos';
import { TodoContext } from '../contexts/todos';

const filterTodos = [
  {
    id: 1,
    title: 'All',
    type: CHANGE_FILTER,
    filter: TodoFilters.SHOW_ALL_TODOS,
  },
  {
    id: 2,
    title: 'Active',
    type: CHANGE_FILTER,
    filter: TodoFilters.SHOW_ACTIVE_TODOS,
  },
  {
    id: 3,
    title: 'Completed',
    type: CHANGE_FILTER,
    filter: TodoFilters.SHOW_COMPLETED_TODOS,
  },
];

const TodoFilter = () => {
  const { state, dispatch } = useContext(TodoContext);

  return (
    <section className="todo__filter">
      {filterTodos.map(todo => (
        <Button
          disabled={state.filter === todo?.filter}
          onClick={() => dispatch({ type: todo?.type, payload: todo?.filter })}
          key={todo?.id}
          className={`todo__filter__button ${
            state.filter === todo?.filter ? 'todo__filter__button--active' : ''
          }`}
        >
          {state.filter === todo?.filter ? (
            <IconMenuFill width="17" height="17" />
          ) : (
            <IconMenu width="17" height="17" color={'#878787'} />
          )}
          <span>{todo?.title}</span>
        </Button>
      ))}
    </section>
  );
};

export default TodoFilter;
