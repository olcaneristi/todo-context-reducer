import React, { useContext, useState } from 'react';
import { ADD_TODO } from './../reducers/todos';
import { nanoid } from 'nanoid';
import { TodoContext } from './../contexts/todos';
import { toast } from 'react-toastify';
import IconAdd from '../assets/icons/IconAdd';

const AddTodo = () => {
  const { dispatch } = useContext(TodoContext);
  const [input, setInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (input === '') {
      return toast.warn('Please enter a todo!');
    }
    dispatch({
      type: ADD_TODO,
      payload: {
        id: nanoid(),
        completed: false,
        text: input,
      },
    });
    setInput('');
    toast.success('Todo added successfully!', {
      icon: '🚀',
    });
  };

  return (
    <div className="todo__input">
      <form onSubmit={handleSubmit}>
        <div className="todo__input__items">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Add a new task"
          />
          <button className="todo__input__items__submit">
            <IconAdd width="20px" height="20px" color="gray" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
