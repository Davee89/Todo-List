import { TodoListStyled } from "../../styles/TodoListApp.styled";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todosList, deleteTask, markTodo, editTodo, updateTodoName }) => {
  const tasksList = todosList.map((todo) => <TodoItem key={todo.id} value={todo.name} disabled={todo.disabled} completed={todo.completed} editTodo={() => editTodo(todo.id)} deleteTask={() => deleteTask(todo.id)} id={todo.id} markTodo={() => markTodo(todo.id)} updateTodoName={updateTodoName} />);

  return <TodoListStyled>{tasksList}</TodoListStyled>;
};

export default TodoList;
