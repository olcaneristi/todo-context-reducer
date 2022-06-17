import React, { useContext, useEffect } from 'react';
import Todo from './Todo';
import { TodoFilters } from './../reducers/todos';
import { TodoContext } from './../contexts/todos';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const applyFilter = state => {
  const { filter, todos } = state;
  switch (filter) {
    case TodoFilters.SHOW_ALL_TODOS:
      return todos;
    case TodoFilters.SHOW_COMPLETED_TODOS:
      return todos.filter(t => t.completed);
    case TodoFilters.SHOW_ACTIVE_TODOS:
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const TodoList = () => {
  const { state } = useContext(TodoContext);
  const todos = applyFilter(state);

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
            (state.filter === 'SHOW_ALL_TODOS' && 'enter new todos') ||
            (state.filter === 'SHOW_ACTIVE_TODOS' && 'assign new todos') ||
            (state.filter === 'SHOW_COMPLETED_TODOS' && 'complete todos')
          } and see the magic. 🚀`}</p>
        </div>
      )}
    </>
  );
};

export default TodoList;
