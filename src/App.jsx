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

  const onClickHandler = () => {
  const newTodo = {
    id: Math.floor((Math.random() * 100000) + 1) ,
    name: inputText
  }
  setTodosList((prevTodos) => {
   return [...prevTodos, newTodo]
  })
  setInputText('')
  }

  return (
  <Card>
  <TodoInput onClickHandler={onClickHandler} value={inputText} onChangeHandler={onChangeHandler} />
  <TodoList todosList={todosList}/>
  </Card>
  )
    
}

export default App
