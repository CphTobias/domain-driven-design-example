import React from "react";
import { TodoApp } from "../../domain/todo/TodoApp";
import { Todos } from "../../domain/todo/Todos";
import Styles from "../../styles";

function TodoPage() {
  return (
    <div>
      <h1>Todopage</h1>
      <Todos
        placeholder={"Insert todo (from parent)"}
        buttonStyle={Styles.awesomeButton}
      >
        <TodoApp>
          <h2>First one</h2>
        </TodoApp>
        <TodoApp placeholder="overridden by parent">
          <h2>Second one</h2>
        </TodoApp>
      </Todos>
    </div>
  );
}

export { TodoPage };
