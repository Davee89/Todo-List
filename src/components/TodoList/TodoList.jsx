import { TodoListStyled } from "../../styles/TodoListApp.styled";
import TodoItem from '../TodoItem/TodoItem'

const TodoList = ({todosList}) => {

const tasksList = todosList.map(todo => <TodoItem key={todo.id} value={todo.name} />)

    return (
        <TodoListStyled>{tasksList}</TodoListStyled>
    )
}

export default TodoList