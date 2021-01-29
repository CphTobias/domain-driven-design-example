import React, { useReducer } from "react";
import { Routes } from "./Routes";
import { UserContext } from "../domain/user/UserContext";
import userReducer from "../domain/user/UserReducer";

//contextprovider
function App() {
  const [user, dispatch] = useReducer(userReducer, null);

  const userProviderValues = React.useMemo(
    () => ({
      user,
      dispatch,
    }),
    [user, dispatch]
  );

  return (
    <div>
      <UserContext.Provider value={userProviderValues}>
        <Routes />
      </UserContext.Provider>
    </div>
  );
}

export default App;
