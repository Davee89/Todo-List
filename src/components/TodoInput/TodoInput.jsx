import { ButtonAdd, TodoInputAdd, InputContainer } from "../../styles/TodoListApp.styled"

const TodoInput = ({onChangeHandler, onClickHandler, value}) => {



return (
<InputContainer>
<TodoInputAdd value={value} type="text" placeholder="Enter todo here" onChange={onChangeHandler} />
<ButtonAdd onClick={onClickHandler}/>
</InputContainer>
)
}
export default TodoInput