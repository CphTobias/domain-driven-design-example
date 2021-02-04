import React from "react";
import { TodoApp } from "../../domain/todo/TodoApp";
import { TodoParent } from "../../domain/todo/TodoParent";

function TodoPage() {
  return (
    <div>
      <h1>Todopage</h1>
      <TodoParent
        placeholder={"Insert todo (from parent)"}
        buttonStyle={"secondary"}
      >
        <TodoApp>
          <h2>First one</h2>
          <h4>Is this one</h4>
        </TodoApp>
        <TodoApp placeholder="overridden by parent">
          <h2>Second one</h2>
        </TodoApp>
      </TodoParent>
    </div>
  );
}

export { TodoPage };
