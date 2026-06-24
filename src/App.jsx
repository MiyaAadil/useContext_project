import { ThemeProvider } from "./context/ThemeContext"
import ThemeText from './components/ThemeText'
import ToggleButton from "./components/ToggleButton"
import ThemeContainer from "./components/ThemeContainer"

const App = () => {
  return (
    <div>
      <ThemeProvider>
          <ThemeContainer>
              <ThemeText />
              <ToggleButton />
          </ThemeContainer>
      </ThemeProvider>
    </div>
  )
}

export default App;
