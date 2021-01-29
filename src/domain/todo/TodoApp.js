import React from "react";
import { useForm } from "../../customhooks/useForm";
import { TodoComponent } from "./TodoComponent";
import { todoReducer } from "./TodoReducer";

const initialState = {
  todos: [],
};

function TodoApp() {
  const { values, setValues, handleChange } = useForm({
    test: "",
  });
  const [state, dispatch] = React.useReducer(todoReducer, initialState);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "ADD_TODO", payload: values.test });
          setValues({ test: "" });
        }}
      >
        <input name="test" value={values.test} onChange={handleChange} />
      </form>
      {state.todos.map((t) => (
        <TodoComponent dispatch={dispatch} t={t} key={t.id} />
      ))}
    </div>
  );
}

export { TodoApp };
