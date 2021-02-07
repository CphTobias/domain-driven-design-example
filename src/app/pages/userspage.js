import React, { useContext, useState } from "react";
import User from "../../domain/user/User";
import { UserContext } from "../../domain/user/UserContext";
import { ButtonPrimary } from "../../styles";

function UsersPage() {
  const { user } = useContext(UserContext);
  const [count, setCount] = useState(0);

  function increment() {
    setCount((c) => c + 1);
  }

  return (
    <div>
      <ButtonPrimary onClick={increment}>{count}</ButtonPrimary>
      <div>
        {user ? (
          <div>
            {User.getPicture(user)}
            <div>{User.getFullName(user, true)}</div>
          </div>
        ) : (
          <div>No users</div>
        )}
      </div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export { UsersPage };
