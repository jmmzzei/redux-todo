import React from 'react'
import { useInputChange } from '../hooks/useInputChange'
import { addTodo } from '../actions/addTodoActionCreator'
import { connect } from 'react-redux'
import { FormComponent } from '../components/FormComponent'

const Form = (props) => {
  let [input, handleInputChange, cleanInput] = useInputChange('')

  const isEmpty = (input) => input.trim()

  const add = (e) => {
    e.preventDefault()
    isEmpty(input) && props.addTodo(input)
    cleanInput()
  }

  return (
    <FormComponent onClick={handleInputChange} input={input} onSubmit={add} />
  )
}

export default connect(null, { addTodo })(Form)
