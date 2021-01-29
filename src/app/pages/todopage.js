import React from "react";
import { TodoApp } from "../../domain/todo/TodoApp";

function TodoPage() {
  return (
    <div>
      <h1>Todopage</h1>
      <h2>First one</h2>
      <TodoApp />
      <h2>Second one</h2>
      <TodoApp />
    </div>
  );
}

export { TodoPage };
