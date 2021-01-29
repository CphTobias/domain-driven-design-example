import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TodoPage } from "./pages/todopage";

//Called by app
function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={TodoPage} />
          <Route path="/" render={() => <div>404</div>} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export { Routes };
