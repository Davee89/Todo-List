import {  ButtonChecked, ButtonErase, TodoInputStyled, TodoItemStyled } from "../../styles/TodoListApp.styled";


const TodoItem = ({value, deleteTask}) => {
    return (
        <TodoItemStyled>
        <TodoInputStyled value={value} disabled />
        <div>
        <ButtonErase onClick={deleteTask} />
        <ButtonChecked />
        </div>
        </TodoItemStyled>
    )
}

export default TodoItem