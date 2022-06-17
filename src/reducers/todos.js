export const CHANGE_FILTER = 'CHANGE_FILTER';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

const toDoReducer = (state, { type, payload }) => {
  switch (type) {
    case CHANGE_FILTER:
      return { ...state, filter: payload };
    case TOGGLE_TODO: {
      const todos = state.todos.map(todo =>
        todo.id === payload.id ? { ...todo, ...payload } : todo,
      );
      return { ...state, todos };
    }
    case ADD_TODO: {
      const todos = [...state.todos, payload];
      return { ...state, todos };
    }
    case REMOVE_TODO: {
      const todos = state.todos.filter(todo => todo.id !== payload.id);
      return { ...state, todos };
    }

    case UPDATE_TODO: {
      const todos = state.todos.map(todo =>
        todo.id === payload.id ? { ...todo, ...payload } : todo,
      );
      return { ...state, todos };
    }
    default:
      return state;
  }
};

export default toDoReducer;
