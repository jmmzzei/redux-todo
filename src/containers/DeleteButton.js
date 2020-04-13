import React from 'react'
import { deleteAll } from '../actions/deleteAllActionCreator'
import { connect } from 'react-redux'
import { DeleteButtonStyled } from '../components/DeleteButtonStyled'

const Button = (props) => {
  const deleteCompleted = () => {
    props.deleteAll()
  }
  return <DeleteButtonStyled onClick={deleteCompleted}>x</DeleteButtonStyled>
}

export default connect(null, { deleteAll })(Button)
