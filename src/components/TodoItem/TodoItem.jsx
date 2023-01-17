import { ButtonChecked, ButtonEdit, ButtonErase, TodoInputStyled, TodoItemStyled } from "../../styles/TodoListApp.styled";
import { useEffect, useState } from "react";
import React from "react";

const TodoItem = ({ deleteTask, markTodo, completed, value, disabled, editTodo, updateTodoName, id }) => {
  const [updatedText, setUpdatedText] = useState("");

  const updateTodoText = (e) => {
    setUpdatedText(e.target.value);
  };

  // ! Passing state up when edit happened to update name in TodosList array
  useEffect(() => {
    if (updatedText) updateTodoName(updatedText, id);
  }, [updatedText]);

  return (
    <TodoItemStyled>
      <TodoInputStyled onChange={updateTodoText} value={updatedText || value} disabled={disabled} completed={completed} />
      <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
        <ButtonErase onClick={deleteTask} />
        <ButtonEdit completed={completed} editable={disabled} onClick={editTodo} />
        <ButtonChecked completed={completed} onClick={markTodo} />
      </div>
    </TodoItemStyled>
  );
};

export default TodoItem;
