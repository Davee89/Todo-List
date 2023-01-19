import { TodoListStyled } from "../../styles/TodoListApp.styled";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todosList, deleteTask, markTodo, editTodo, updateTodoName }) => {
	const tasksList = todosList.map(({ id, name, disabled, completed }) => (
		<TodoItem
			key={id}
			value={name}
			disabled={disabled}
			completed={completed}
			editTodo={() => editTodo(id)}
			deleteTask={() => deleteTask(id)}
			id={id}
			markTodo={() => markTodo(id)}
			updateTodoName={updateTodoName}
		/>
	));

	return <TodoListStyled>{tasksList}</TodoListStyled>;
};

export default TodoList;
