import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TodoFilter from './components/TodoFilter';

const App = () => {
  return (
    <section className="todo">
      <div className="todo__container">
        <div className="todo__list">
          <ToastContainer
            position="top-right"
            autoClose={2500}
            closeOnClick
            newestOnTop={false}
            pauseOnFocusLoss={false}
          />
          <AddTodo />
          <TodoList />
        </div>
        <TodoFilter />
      </div>
    </section>
  );
};

export default App;
