import { useState } from 'react'

export const useInputChange = (initialState) => {
  const [input, setInput] = useState(initialState)
  const handleInputChange = (e) => {
    setInput(e.currentTarget.value)
  }
  const cleanInput = () => setInput('')
  return [input, handleInputChange, cleanInput]
}
