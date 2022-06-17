import React, { useContext } from 'react';
import Button from './Button';
import IconMenu from '../assets/icons/IconMenu';
import IconMenuFill from '../assets/icons/IconMenuFill';
import { CHANGE_FILTER, VisibilityFilters } from '../reducers/todos';
import { TodoContext } from '../contexts/todos';

const BUTTONS_FILTER = [
  {
    id: 1,
    caption: 'All',
    type: CHANGE_FILTER,
    filter: VisibilityFilters.SHOW_ALL,
  },
  {
    id: 2,
    caption: 'Active',
    type: CHANGE_FILTER,
    filter: VisibilityFilters.SHOW_ACTIVE,
  },
  {
    id: 3,
    caption: 'Completed',
    type: CHANGE_FILTER,
    filter: VisibilityFilters.SHOW_COMPLETED,
  },
];

const TodoFilter = () => {
  const { state, dispatch } = useContext(TodoContext);

  return (
    <section className="todo__filter">
      {BUTTONS_FILTER.map(({ id, caption, type, filter }) => (
        <Button
          disabled={state.filter === filter}
          onClick={() => dispatch({ type, payload: filter })}
          key={id}
          className={`todo__filter__button ${
            state.filter === filter ? 'todo__filter__button--active' : ''
          }`}
        >
          {state.filter === filter ? (
            <IconMenuFill width="17" height="17" />
          ) : (
            <IconMenu width="17" height="17" color={'#878787'} />
          )}
          <span>{caption}</span>
        </Button>
      ))}
    </section>
  );
};

export default TodoFilter;
