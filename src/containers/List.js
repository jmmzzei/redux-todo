import React from 'react'
import { connect } from 'react-redux'
import Item from './Item'
import { ListStyled } from '../components/ListStyled.js'
import DeleteButton from '../containers/DeleteButton'

export const List = ({ todos, completed }) => {
  console.log(todos)
  return (
    <ListStyled>
      {completed ? (
        <p>
          completed <DeleteButton />
        </p>
      ) : (
        <p>todo</p>
      )}
      {todos && completed
        ? todos.map(
            (e) =>
              e.completed &&
              e.text && (
                <Item key={e.index} index={e.index}>
                  {e.text}
                </Item>
              ),
          )
        : todos.map(
            (e) =>
              !e.completed &&
              e.text && (
                <Item key={e.index} index={e.index} completed>
                  {e.text}
                </Item>
              ),
          )}
    </ListStyled>
  )
}

const mapStateToProps = (state) => ({ ...state.mainReducer })

export default connect(mapStateToProps)(List)
