// import { ThemeProvider } from "./context/ThemeContext"
// import ThemeText from './components/ThemeText'
// import ToggleButton from "./components/ToggleButton"
// import ThemeContainer from "./components/ThemeContainer"
// import { LoginProvider } from "./context/LoginContext"
// import UserInfo from "./components/UserInfo"
// import LoginButton from "./components/LoginButton"

import UseRef from "./components/UseRef";

const App = () => {

  return (
    <div>
      {/* <ThemeProvider>
          <ThemeContainer>
              <ThemeText />
              <ToggleButton />
          </ThemeContainer>
      </ThemeProvider>

      <LoginProvider>
        <UserInfo />
        <LoginButton />
      </LoginProvider> */}

      <UseRef />
      
    </div>
  )
}

export default App;
