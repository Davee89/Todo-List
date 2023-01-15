import {  ButtonChecked, ButtonErase, TodoInputStyled, TodoItemStyled } from "../../styles/TodoListApp.styled";


const TodoItem = ({value, }) => {
    return (
        <TodoItemStyled>
        <TodoInputStyled value={value} disabled />
        <div>
        <ButtonErase />
        <ButtonChecked />
        </div>
        </TodoItemStyled>
    )
}

export default TodoItem