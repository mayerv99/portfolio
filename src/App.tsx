import { ThemeProvider } from "styled-components"
import GlobalStyle from "./styles/global"

import light from "./styles/themes/light"
import dark from "./styles/themes/dark"
import useStorage from "./utils/useStorage"

import { DefaultTheme } from "styled-components/dist/types"

function App() {
  const [theme, setTheme] = useStorage<DefaultTheme>("theme", light)

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <button onClick={toggleTheme}>Carlos</button>
    </ThemeProvider>
  )
}

export default App
