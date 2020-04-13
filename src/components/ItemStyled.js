import styled from 'styled-components'

export const ItemStyled = styled.article`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background: rgb(229, 229, 234);
  padding: 5px 15px;
  margin: 5px;
  height: auto;
  cursor: pointer;
  animation: show 0.5s forwards;
  max-width: 300px;
  word-wrap: break-word;
  overflow: hidden;
  text-decoration: ${(props) => (props.completed ? 'none' : 'line-through')};

  p {
    opacity: ${(props) => (props.completed ? '1' : '0.4')};
    margin: 0;
  }

  &:hover {
    background: rgb(242, 242, 247);
    transition: all 0.3s ease-in;
  }

  @keyframes show {
    0% {
      opacity: 0;
      transform: translateX(${(props) => (props.completed ? '-10px' : '10px')});
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`
