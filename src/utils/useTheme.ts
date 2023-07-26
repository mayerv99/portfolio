import { Dispatch, SetStateAction } from "react"

import useStorage from "./useStorage"
import { DefaultTheme } from "styled-components/dist/types"

type Response<DefaultTheme> = [
  DefaultTheme,
  Dispatch<SetStateAction<DefaultTheme>>
]

function useTheme(selectedTheme: DefaultTheme): Response<DefaultTheme> {
  const [theme, setTheme] = useStorage("theme", selectedTheme)

  return [theme as DefaultTheme, setTheme]
}

export default useTheme
