import ThemeToggle from './components/ThemeToggle'
import Gallery from './components/Gallery'
import SearchForm from './components/SearchForm'
import { useGlobelContext } from './Context'
const App = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobelContext()
  return (
    <main>
      <ThemeToggle
        isDarkTheme={isDarkTheme}
        toggleDarkTheme={toggleDarkTheme}
      />
      <SearchForm />
      <Gallery />
    </main>
  )
}
export default App
