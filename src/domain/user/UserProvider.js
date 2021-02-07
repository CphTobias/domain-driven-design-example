import React, { useEffect, useReducer, useState } from "react";
import { UserContext } from "./UserContext";
import userReducer from "./UserReducer";

function UserProvier({ children }) {
  const [user, dispatch] = useReducer(userReducer, null);
  const [loading, setLoading] = useState(true);

  async function fetchUser() {
    try {
      const res = await fetch("https://randomuser.me/api?page=3");
      const data = await res.json();
      if (data) {
        console.log("fetched");
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
    <>
      {loading ? (
        <div>loading user...</div>
      ) : (
        <UserContext.Provider value={userProviderValues}>
          {children}
        </UserContext.Provider>
      )}
    </>
  );
}

export { UserProvier };
