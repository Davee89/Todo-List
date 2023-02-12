import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import Card from "./components/ui/Card";

function App() {
	const [inputText, setInputText] = useState("");
	const [todosList, setTodosList] = useState([]);

	// ! Updating name of task when getting edited
	const updateTodoName = (updatedValue, id) => {
		const newTasks = todosList.map(todo => (todo.id === id ? { ...todo, name: updatedValue } : todo));
		setTodosList(newTasks);
	};

	// ! Getting previous todo list from LocalStorage
	useEffect(() => {
		if (JSON.parse(localStorage.getItem("storedTasks")))
			setTodosList([...JSON.parse(localStorage.getItem("storedTasks"))]);
	}, []);

	// ! Updating current todo list to LocalStorage
	useEffect(() => {
		setTimeout(() => {
			localStorage.setItem("storedTasks", JSON.stringify(todosList));
		}, 1000);
	}, [todosList]);

	const onChangeHandler = e => {
		setInputText(e.target.value);
	};

	// ! TODO FUNCTIONS !

	const addTodo = () => {
		if (!inputText) return;
		const newTodo = {
			id: Math.floor(Math.random() * 100000 + 1),
			name: inputText,
			completed: false,
			disabled: true,
		};
		setTodosList([...todosList, newTodo]);
		setInputText("");
	};

	const deleteTodo = id => {
		const newTasks = todosList.filter(todo => todo.id !== id);
		setTodosList(newTasks);
	};

	const markTodo = id => {
		const newTasks = todosList.map(todo =>
			todo.id === id && !todo.completed && todo.disabled
				? { ...todo, completed: true }
				: todo.id === id
				? { ...todo, completed: false }
				: todo,
		);
		setTodosList(newTasks);
	};

	const editTodo = id => {
		const newTasks = todosList.map(todo => {
			if (todo.id === id && todo.disabled && !todo.completed) {
				return { ...todo, disabled: false };
			} else if (!todo.disabled) {
				return { ...todo, disabled: true };
			} else return todo;
		});
		setTodosList([...newTasks]);
	};

	return (
		<Card>
			<TodoInput value={inputText} onClickHandler={addTodo} onChangeHandler={onChangeHandler} />
			<TodoList
				updateTodoName={updateTodoName}
				editTodo={editTodo}
				todosList={todosList}
				deleteTask={deleteTodo}
				markTodo={markTodo}
			/>
		</Card>
	);
}

export default App;
