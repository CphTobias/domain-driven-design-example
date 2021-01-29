import React from "react";
import { TodoComponent } from "./TodoComponent";
import { todoReducer } from "./TodoReducer";

const initialState = {
  todos: [],
};

function TodoApp() {
  const [test, setTest] = React.useState("");
  const [state, dispatch] = React.useReducer(todoReducer, initialState);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "ADD_TODO", payload: test });
          setTest("");
        }}
      >
        <input
          name="test"
          value={test}
          onChange={(e) => setTest(e.target.value)}
        />
      </form>
      {state.todos.map((t) => (
        <TodoComponent dispatch={dispatch} t={t} key={t.id} />
      ))}
    </div>
  );
}

export { TodoApp };
