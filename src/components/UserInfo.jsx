import { useLogin } from "../context/LoginContext";

const UserInfo = () => {

    const { user } = useLogin();

  return (
    <div>
      <h1>Welcome: {user ? user : "Guest"}</h1>
    </div>
  )
}

export default UserInfo;
