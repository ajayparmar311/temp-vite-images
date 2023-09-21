import { BsMoon, BsFillSunFill } from 'react-icons/bs'

const ThemeToggle = ({ isDarkTheme, toggleDarkTheme }) => {
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={() => toggleDarkTheme()}>
        {!isDarkTheme && <BsFillSunFill className="toggle-icon" />}
        {isDarkTheme && <BsMoon className="toggle-icon" />}
      </button>
    </section>
  )
}
export default ThemeToggle
