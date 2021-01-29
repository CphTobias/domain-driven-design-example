import { nanoid } from "nanoid";

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          { id: nanoid(), todo: action.payload, finished: false },
        ],
      };
    case "REMOVE_TODO":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "TOGGLE_FINISHED":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, finished: !todo.finished }
            : todo
        ),
      };
    case "REMOVE_FINISHED":
      return {
        todos: state.todos.filter((todo) => !todo.finished),
      };
    default:
      return state;
  }
}

export { todoReducer };
