import React, { useContext } from "react";
import { UserContext } from "../../domain/user/UserContext";

function UsersPage() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <div>
        {user ? (
          <img src={user.picture.large} alt="userpicture" />
        ) : (
          <div>No users</div>
        )}
      </div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export { UsersPage };
