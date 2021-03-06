import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import { UserProvier } from "../domain/user/UserProvider";

const SomePage = lazy(() =>
  import("./pages/somepage").then(({ SomePage }) => ({ default: SomePage }))
);
const TodoPage = lazy(() =>
  import("./pages/todopage").then(({ TodoPage }) => ({ default: TodoPage }))
);
const UsersPage = lazy(() =>
  import("./pages/userspage").then(({ UsersPage }) => ({ default: UsersPage }))
);

//Called by app
function Routes() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={"loading..."}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/somepage">Some page</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users page</NavLink>
            </li>
          </ul>

          <Switch>
            <Route path="/" exact>
              <TodoPage />
            </Route>
            <Route path="/somepage" exact>
              <SomePage />
            </Route>
            <Route path="/users">
              <UsersPage />
            </Route>
            <Route path="/">
              <div>404</div>
            </Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export { Routes };
