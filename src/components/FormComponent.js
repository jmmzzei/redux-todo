import React from 'react'
import { FormStyled } from './FormStyled'

export const FormComponent = ({ input, onClick, onSubmit }) => (
  <FormStyled>
    <input
      type="text"
      value={input}
      onChange={onClick}
      id="todo"
      placeholder="do homework"
      autoFocus
      autoComplete="off"
    />
    <button onClick={onSubmit}>add todo</button>
  </FormStyled>
)
