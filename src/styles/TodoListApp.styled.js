import styled, { css } from "styled-components";
import checkedIcon from "../../public/checked.png";
import checkedIconGreen from "../../public/checked-green.png";
import edit from "../../public/edit.png";
import editChecked from "../../public/edit-checked.png";

export const TodoInputAdd = styled.input.attrs((props) => {
  placeholder: props.placeholder;
  type: props.type;
  value: props.value;
})`
  padding: 10px 15px;
  background-color: lightgray;
  border: none;
  text-align: center;
  min-width: 40%;
  height: 20px;
`;
export const TodoInputStyled = styled.input.attrs((props) => {
  disabled: props.disabled;
  value: props.value;
})`
  background-color: lightgray;
  padding: 5px;
  border: none;
  max-width: 60%;
  opacity: ${({ completed }) => (completed ? 0.3 : 1)};
`;

export const TodoListStyled = styled.div`
  background-color: lightgrey;
  display: flex;
  flex-direction: column;
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
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const TodoItemStyled = styled.div`
  padding: 10px;
  background-color: lightgray;
  font-size: 15px;
  letter-spacing: 1px;
  border-bottom: black solid 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 40%;
`;

const ButtonCss = css`
  background-size: cover;
  background-color: lightgray;
  border: none;
  width: 15px;
  height: 15px;
`;

export const ButtonChecked = styled.button`
  ${ButtonCss}
  background-image: ${({ completed }) => (completed ? `url(${checkedIconGreen})` : `url(${checkedIcon})`)};
  :hover {
    background-image: url("/public/checked-green.png");
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

  background-image: url("../../public/remove.png");

  :hover {
    animation: vibrate-1 0.4s linear infinite both;
  }
`;
export const ButtonAdd = styled.button`
  background-image: url("../../public/add.png");
  background-size: cover;
  background-color: lightgray;
  border: none;
  width: 40px;
  height: 40px;
`;
