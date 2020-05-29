import styled from 'styled-components'

export const FormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 0.1fr;
  grid-template-areas: "form date";
  width: 100%;
  background: #fff;
  font-family: 'Abel', sans-serif;
  margin: 0;
  padding: 20px 0;
  
  section{
    grid-area: form;
    display:flex;
    align-items:center;
    justify-content:center; 
    
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
  } 
    `
