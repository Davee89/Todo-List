import { useState } from "react"
import TodoInput from "./components/TodoInput/TodoInput"
import TodoList from "./components/TodoList/TodoList"
import Card from './components/ui/Card'

function App() {
  const [inputText, setInputText] = useState('')
  const [todosList, setTodosList] = useState([])

  const onChangeHandler = (e) => {
  setInputText(e.target.value)  
}

  const addTask = () => {
  if (!inputText) return
  let number = todosList.length + 1
  const newTodo = {
    id: number ,
    name: inputText
  }
  setTodosList([...todosList, newTodo])
  setInputText('')
  }

const deleteTask = (id) => {
let newTasks = todosList.filter(todo => todo.id !== id)
setTodosList([...newTasks])
} 



  return (
  <Card>
  <TodoInput onClickHandler={addTask} value={inputText} onChangeHandler={onChangeHandler} />
  <TodoList todosList={todosList} deleteTask={deleteTask}/>
  </Card>
  )
    
}

export default App
