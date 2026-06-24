import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const ThemeContainer = ({ children }) => {

    const { theme } = useContext(ThemeContext)

  return (
    <div className={theme === "Light" ? "bg-white text-black min-h-screen" : "bg-black text-white min-h-screen"}>
      {children}
    </div>
  )
}

export default ThemeContainer;
