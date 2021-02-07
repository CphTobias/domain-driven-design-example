import React from "react";
import { UserProvier } from "../domain/user/UserProvider";
import { Routes } from "./Routes";

//contextprovider
function App() {
  return (
    <div>
      <UserProvier>
        <Routes />
      </UserProvier>
    </div>
  );
}

export default App;
