import React from "react";
import { Button } from "../../components/Button";

const TodoComponent = React.memo(({ dispatch, t }) => {
  return (
    <div>
      <p
        onClick={() => dispatch({ type: "TOGGLE_FINISHED", payload: t.id })}
        style={t.finished ? { color: "green" } : { color: "red" }}
      >
        {t.todo}
      </p>
      <Button onClick={() => dispatch({ type: "REMOVE_TODO", payload: t.id })}>
        remove
      </Button>
    </div>
  );
});

export { TodoComponent };
