import { useEffect, useState, Dispatch, SetStateAction } from "react"

type Response<T> = [T, Dispatch<SetStateAction<T>>]

function useStorage<T>(key: string, initialState: any): Response<T> {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key)

    if (!storageValue) {
      return initialState
    }

    if (storageValue) {
      return JSON.parse(storageValue)
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

export default useStorage
