import React, { useContext } from 'react';
import { TOGGLE_TODO, REMOVE_TODO, UPDATE_TODO } from './../reducers/todos';
import { TodoContext } from './../contexts/todos';
import { toast } from 'react-toastify';
import IconNotChecked from '../assets/icons/IconNotChecked';
import IconChecked from '../assets/icons/IconChecked';
import IconDelete from '../assets/icons/IconDelete';
import IconEdit from '../assets/icons/IconEdit';

const Todo = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  const updateTodo = () => {
    let newText = prompt('Enter new text');
    if (newText === '') {
      return toast.warn('Cannot update todo with empty text');
    }
    if (newText === null) return;
    dispatch({
      type: 'UPDATE_TODO',
      payload: { id: todo?.id, text: newText },
    });
  };

  const removeTodo = () => {
    dispatch({
      type: 'REMOVE_TODO',
      payload: { id: todo?.id },
    });
    toast.success('Todo removed successfully!');
  };

  return (
    <li className={`todo__list__item ${todo?.completed ? 'todo__list__item--completed' : ''}`}>
      <div className="todo__list__item__container">
        <a
          onClick={() =>
            dispatch({
              type: TOGGLE_TODO,
              payload: { id: todo?.id, completed: !todo?.completed },
            })
          }
        >
          {todo?.completed ? (
            <IconChecked width="18" height="18" />
          ) : (
            <IconNotChecked width="18" height="18" />
          )}
          <span
            className={`todo__list__item__text ${
              todo?.completed ? 'todo__list__item__text--completed' : ''
            }`}
          >
            {todo?.text}
          </span>
        </a>

        <div className="todo__list__item__btn">
          {!todo?.completed ? (
            <button onClick={updateTodo}>
              <IconEdit width="18" height="18" />
            </button>
          ) : null}

          <button onClick={removeTodo}>
            <IconDelete width="18" height="18" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default Todo;
