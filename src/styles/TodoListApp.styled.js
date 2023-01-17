import styled, { css } from "styled-components";
import checkedIcon from "../../public/checked.png";
import checkedIconGreen from "../../public/checked-green.png";
import edit from "../../public/edit.png";
import editChecked from "../../public/edit-checked.png";

// ! INPUTS STYLING
export const TodoInputAdd = styled.input.attrs((props) => {
  placeholder: props.placeholder;
  type: props.type;
  value: props.value;
})`
  padding: 10px 15px;
  background-color: white;
  border: none;
  text-align: center;
  min-width: 40%;
  height: 40px;
  border-radius: 5px 0 0 5px;
  font-size: 20px;
  color: black;
`;
export const TodoInputStyled = styled.input.attrs((props) => {
  disabled: props.disabled;
  value: props.value;
})`
  font-size: 20px;
  text-transform: capitalize;
  background-color: white;
  padding: 5px;
  border: none;
  max-width: 60%;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  opacity: ${({ completed }) => (completed ? 0.3 : 1)};
  color: ${({ disabled }) => (disabled ? "black" : "orange")};
`;

// ! CONTAINERS STYLING
export const TodoListStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 51%;
`;

export const CardStyled = styled.div`
  padding: 40px;
  border: 1px solid lightgray;
  border-radius: 40px;
  margin: 0 auto;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: radial-gradient(white, lightgreen, green);
  min-height: 60vh;
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  min-width: 100%;
`;

export const TodoItemStyled = styled.div`
  padding: 10px;
  background-color: white;
  font-size: 15px;
  letter-spacing: 1px;
  border-bottom: black solid 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// ! BUTTONS STYLING
const ButtonCss = css`
  background-size: cover;
  background-color: white;
  border: none;
  width: 30px;
  height: 30px;
`;

export const ButtonChecked = styled.button`
  ${ButtonCss}
  background-image: ${({ completed }) => (completed ? `url(${checkedIconGreen})` : `url(${checkedIcon})`)};
  :hover {
    background-image: url("/checked-green.png");
  }
`;

export const ButtonEdit = styled.button`
  ${ButtonCss}
  background-image: ${({ completed, editable }) => (completed || !editable ? `url(${editChecked})` : `url(${edit})`)};
  :hover {
    opacity: 0.5;
  }
`;

export const ButtonErase = styled.button`
  ${ButtonCss}
  @keyframes vibrate-1 {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-1px, 1px);
    }
    40% {
      transform: translate(-1px, -1px);
    }
    60% {
      transform: translate(1px, 1px);
    }
    80% {
      transform: translate(1px, -1px);
    }
    100% {
      transform: translate(0);
    }
  }

  background-image: url("/remove.png");

  :hover {
    animation: vibrate-1 0.4s linear infinite both;
  }
`;
export const ButtonAdd = styled.button`
  background-image: url("/add.png");
  background-size: cover;
  background-color: white;
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 0 5px 5px 0;
  :hover {
    background-blend-mode: difference;
  }
`;
