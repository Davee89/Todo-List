import { useState } from "react";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import Card from "./components/ui/Card";

function App() {
  const [inputText, setInputText] = useState("");
  const [todosList, setTodosList] = useState([]);

  const onChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  const addTask = () => {
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

  const deleteTask = (id) => {
    let newTasks = todosList.filter((todo) => todo.id !== id);
    setTodosList([...newTasks]);
  };

  const markTodo = (id) => {
    const newTasks = todosList.map((todo) => (todo.id === id && !todo.completed && todo.disabled ? { ...todo, completed: true } : todo.id === id ? { ...todo, completed: false } : todo));
    setTodosList([...newTasks]);
  };

  const editTodo = (id) => {
    const newTasks = todosList.map((todo) => {
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
      <TodoInput value={inputText} onClickHandler={addTask} onChangeHandler={onChangeHandler} />
      <TodoList editTodo={editTodo} todosList={todosList} deleteTask={deleteTask} markTodo={markTodo} />
    </Card>
  );
}

export default App;
