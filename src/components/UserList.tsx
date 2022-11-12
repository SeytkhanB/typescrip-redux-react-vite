import { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Loading from "./Loading";

const UserList: React.FC = () => {
  const { error, loading, users } = useTypedSelector(
    (state) => state.userReducer
  );
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          color: "red",
        }}
      >
        {error}
      </h2>
    );
  }

  return (
    <div>
      {users.map((user) => (
        <h4 key={user.id} style={{ color: "teal" }}>
          {user.name}
        </h4>
      ))}
    </div>
  );
};
export default UserList;
