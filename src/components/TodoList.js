import React, { useContext, useEffect } from 'react';
import Todo from './Todo';
import { VisibilityFilters } from './../reducers/todos';
import { TodoContext } from './../contexts/todos';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const applyFilter = state => {
  const { filter, todos } = state;
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const TodoList = () => {
  const { state } = useContext(TodoContext);
  const todos = applyFilter(state);

  console.log(state);

  return (
    <>
      {todos?.length > 0 ? (
        <TransitionGroup component="ul">
          {todos.map(todo => (
            <CSSTransition key={todo?.id} timeout={700} classNames="item">
              <Todo todo={todo} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <div className="todo__not__found">
          <p>Todo not found. 😔 </p>
          <p>{`Please ${
            (state.filter === 'SHOW_ALL' && 'enter new todos') ||
            (state.filter === 'SHOW_ACTIVE' && 'assign new todos') ||
            (state.filter === 'SHOW_COMPLETED' && 'complete todos')
          } and see the magic. 🚀`}</p>
        </div>
      )}
    </>
  );
};

export default TodoList;
