import {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'



const ThemeText = () => {

  const { theme } = useContext(ThemeContext)

  return (
    <div>
      <h1>Theme: {theme}</h1>
    </div>
  )
}

export default ThemeText;
