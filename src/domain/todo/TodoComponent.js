import React from "react";

const TodoComponent = React.memo(({ dispatch, t }) => {
  console.log("rendered");
  return (
    <div>
      <p
        onClick={() => dispatch({ type: "TOGGLE_FINISHED", payload: t.id })}
        style={t.finished ? { color: "green" } : { color: "red" }}
      >
        {t.todo}
      </p>
      <button onClick={() => dispatch({ type: "REMOVE_TODO", payload: t.id })}>
        remove
      </button>
    </div>
  );
});

export { TodoComponent };
