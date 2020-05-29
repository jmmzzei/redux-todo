import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

const DateStyled = styled.p`
  grid-area: date; 
  background: lightgrey;
  color: white;
  border-radius: 5px;
  margin: auto 1rem;
  padding: 0.5rem;
  font-size: 1.4rem;
`

export const Date = () => (
  <DateStyled>
    {moment().format('L')}   
  </DateStyled>
)
