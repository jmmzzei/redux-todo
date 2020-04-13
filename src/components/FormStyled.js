import styled from 'styled-components'

export const FormStyled = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #fff;
  font-family: 'Abel', sans-serif;
  margin: 0;
  padding: 20px 0;

  button {
    font-family: 'Abel', sans-serif;
    font-size: 20px;
    border: none;
    padding: 12px 8px;
    color: rgb(44, 44, 46);
    background: #fff;
    margin: 0 10px;
    cursor: pointer;
    transition: all 0.3s ease-in;

    &:hover {
      background: rgb(242, 242, 247);
      border-radius: 6px;
    }
  }

  input {
    font-size: 20px;
    border-radius: 8px;
    font-family: 'Abel', sans-serif;
    padding: 10px;
    border: 1px solid rgb(242, 242, 247);
  }
`
