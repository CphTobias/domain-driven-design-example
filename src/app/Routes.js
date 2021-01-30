import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const SomePage = lazy(() =>
  import("./pages/somepage").then(({ SomePage }) => ({ default: SomePage }))
);
const TodoPage = lazy(() =>
  import("./pages/todopage").then(({ TodoPage }) => ({ default: TodoPage }))
);

//Called by app
function Routes() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={"loading..."}>
          <Switch>
            <Route path="/" exact component={TodoPage} />
            <Route path="/somepage" exact component={SomePage} />
            <Route path="/" render={() => <div>404</div>} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export { Routes };
