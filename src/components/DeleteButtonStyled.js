import styled from 'styled-components'

export const DeleteButtonStyled = styled.button`
  --initial-width: 30px;
  --final-width: 65px;
  --danger: rgb(255, 55, 95);

  margin: 10px;
  border-radius: 15px;
  border: none;
  width: var(--initial-width);
  height: var(--initial-width);
  background: #fff;
  cursor: pointer;
  position: relative;
  animation: back 0.5s ease forwards;
  outline: none;

  &:hover {
    color: #fff;
    animation: expands 0.4s ease forwards;
  }

  &:hover::after {
    content: 'clean';
    position: absolute;
    left: -8px;
    top: 7.5px;
    width: 100%;
    color: #fff;
    font-weight: bold;
  }

  @keyframes back {
    from {
      width: var(--final-width);
    }
    to {
      width: var(--initial-width);
    }
  }

  @keyframes expands {
    to {
      color: var(--danger);
      width: var(--final-width);
      background: var(--danger);
    }
  }
`
