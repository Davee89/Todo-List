import { TodoListStyled } from "../../styles/TodoListApp.styled";
import TodoItem from '../TodoItem/TodoItem'

const TodoList = ({todosList, deleteTask}) => {

const tasksList = todosList.map(todo => <TodoItem key={todo.id} value={todo.name} deleteTask={() => deleteTask(todo.id)}/>)

    return (
        <TodoListStyled>{tasksList}</TodoListStyled>
    )
}

export default TodoList