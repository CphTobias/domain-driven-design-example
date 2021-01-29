import React from "react";
import { useForm } from "../../customhooks/useForm";
import { TodoComponent } from "./TodoComponent";
import { todoReducer } from "./TodoReducer";
import { Button } from "../../components/Button";
import Styles from "../../styles";

const initialState = {
  //todos: [{id, todo, finished}]
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
      <Button
        onClick={() => dispatch({ type: "REMOVE_FINISHED" })}
        style={Styles.awesomeButton}
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
