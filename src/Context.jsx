import { createContext, useContext, useEffect, useState } from 'react'

const globelContext = createContext()

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches
  const localThemeMode = localStorage.getItem('darkTheme') === 'true'
  return localThemeMode || prefersDarkMode
}

export const useGlobelContext = () => useContext(globelContext)

const AppContext = ({ children }) => {
  const [isDarkTheme, setIsDArkTheme] = useState(getInitialDarkMode())
  const [searchValue, setSearchValue] = useState('cat')

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme
    setIsDArkTheme(!isDarkTheme)
    localStorage.setItem('darkTheme', newDarkTheme)
  }

  const getSearchVAlue = (searchImage) => {
    setSearchValue(searchImage)
  }

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme)
  }, [isDarkTheme])

  return (
    <globelContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, getSearchVAlue, searchValue }}
    >
      {children}
    </globelContext.Provider>
  )
}
export default AppContext
