import React from "react";
import { useForm } from "../../customhooks/useForm";
import { TodoComponent } from "./TodoComponent";
import { todoReducer } from "./TodoReducer";
import { Button } from "../../components/Button";

const initialState = {
  //todos: [{id, todo, finished}]
  todos: [],
};

function TodoApp({ placeholder, buttonStyle, children }) {
  const { values, setValues, handleChange } = useForm({
    test: "",
  });
  const [state, dispatch] = React.useReducer(todoReducer, initialState);

  return (
    <div>
      <div>{children}</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "ADD_TODO", payload: values.test });
          setValues({ test: "" });
        }}
      >
        <input
          name="test"
          value={values.test}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </form>
      <Button
        css={buttonStyle}
        onClick={() => dispatch({ type: "REMOVE_FINISHED" })}
      >
        Remove all complete
      </Button>
      {state.todos.map((t) => (
        <TodoComponent dispatch={dispatch} t={t} key={t.id} />
      ))}
    </div>
  );
}

export { TodoApp };
