import React from 'react'
import Form from './containers/Form'
import List from './containers/List'
import { AppStyled } from './components/AppStyled'
import { Columns } from './components/Columns'

export const App = () => (
  <AppStyled>
    <Form />
    <Columns>
      <List />
      <List completed />
    </Columns>
  </AppStyled>
)
