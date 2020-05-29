import React from 'react'
import { FormStyled } from './FormStyled'
import {Date} from './Date'

export const FormComponent = ({ input, onClick, onSubmit }) => (
  <FormStyled>
    <Date />
      <section>
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
    </section> 
  </FormStyled>
)
