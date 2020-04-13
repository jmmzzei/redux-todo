import React from 'react'
import { ItemStyled } from '../components/ItemStyled'
import { select } from '../actions/selectActionCreator'
import { connect } from 'react-redux'

const Item = ({ select, index, children, completed }) => {
  const handleSelection = () => select(index)

  return (
    <ItemStyled onClick={handleSelection} completed={completed && completed}>
      <p>{children}</p>
    </ItemStyled>
  )
}

export default connect(null, { select })(Item)
