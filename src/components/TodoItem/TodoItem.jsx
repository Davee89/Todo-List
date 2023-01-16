import { useState } from "react";
import { ButtonChecked, ButtonEdit, ButtonErase, TodoInputStyled, TodoItemStyled } from "../../styles/TodoListApp.styled";

const TodoItem = ({ deleteTask, markTodo, completed, value, disabled, editTodo }) => {
  const [updatedText, setUpdatedText] = useState("");

  const updateTodoItem = (e) => {
    setUpdatedText(e.target.value);
  };

  return (
    <TodoItemStyled>
      <TodoInputStyled onChange={updateTodoItem} value={updatedText || value} disabled={disabled} completed={completed} />
      <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
        <ButtonEdit completed={completed} editable={disabled} onClick={editTodo} />
        <ButtonErase onClick={deleteTask} />
        <ButtonChecked completed={completed} onClick={markTodo} />
      </div>
    </TodoItemStyled>
  );
};

export default TodoItem;
