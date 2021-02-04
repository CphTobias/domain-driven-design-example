import React, { useContext } from "react";
import User from "../../domain/user/User";
import { UserContext } from "../../domain/user/UserContext";

function UsersPage() {
  const { user } = useContext(UserContext);

  return (
    <div>
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
