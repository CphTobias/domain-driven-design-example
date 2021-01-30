import React, { useEffect, useReducer, useState } from "react";
import { Routes } from "./Routes";
import { UserContext } from "../domain/user/UserContext";
import userReducer from "../domain/user/UserReducer";

//contextprovider
function App() {
  const [user, dispatch] = useReducer(userReducer, null);
  const [loading, setLoading] = useState(true);

  async function fetchUser() {
    try {
      const res = await fetch("https://randomuser.me/api?page=3");
      const data = await res.json();
      if (data) {
        dispatch({ type: "LOGIN", payload: data.results[0] });
      }
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchUser();
    setLoading(false);
  }, []);

  const userProviderValues = React.useMemo(
    () => ({
      user,
      dispatch,
    }),
    [user, dispatch]
  );

  return (
    <div>
      {loading ? (
        <div>Loading users...</div>
      ) : (
        <UserContext.Provider value={userProviderValues}>
          <Routes />
        </UserContext.Provider>
      )}
    </div>
  );
}

export default App;
