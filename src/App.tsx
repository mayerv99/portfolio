//Theme handling
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./styles/global"
import light from "./styles/themes/light"
import dark from "./styles/themes/dark"
import useTheme from "./utils/useTheme"

// Sections
import Navbar from "./components/Navbar"
import Home from "./Sections/Home"
import Skills from "./Sections/Skills"

function App() {
  const [theme, setTheme] = useTheme(light)

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar toggleTheme={toggleTheme} />
      <Home />
      <Skills />
    </ThemeProvider>
  )
}

export default App
