import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const ToggleButton = () => {

  const { theme, setTheme } = useContext(ThemeContext)

  const handleToggle = () => {
    setTheme(theme === "Light"? "Dark" : "Light")
  }

  return (
    <div>
      <button className='bg-red-500 p-2 rounded-full text-white text-center m-4 cursor-pointer active:scale-95' onClick={handleToggle}>{theme === "Light" ? "Switch to Dark Mode" : "Switch to Light Mode"}</button>
    </div>
  )
}

export default ToggleButton;
