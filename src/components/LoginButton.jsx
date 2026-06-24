import { useLogin } from "../context/LoginContext";

const LoginButton = () => {

    const { user, setUser} = useLogin()

    const handleLogin = () => {
        setUser(user === null ? "Aadil" : null);
    }

  return (
    <div>
      <button onClick={handleLogin}>{user ? "Log out" : "Log in"}</button>
    </div>
  )
}

export default LoginButton;
