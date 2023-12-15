import { useState } from "react";
import { FormWrapper } from "../../components/Form"
import { Nav, Name, LogoutButton, InputTodo, TodoList, TodoItemWrapper, TodoToggle, TodoContent, DeleteButton } from "./styled";
import ImgClose from "../../assets/icon-close.svg"

const TodoItem = ({ data }: { data: TodoItemType }) => {
  const { id, content, isCompleted } = data;

  return (
    <TodoItemWrapper >
      <div>
        <TodoToggle type="checkbox" checked={isCompleted} />
        <TodoContent>{content}</TodoContent>
      </div>
      <DeleteButton data-id={id} >
        <img src={ImgClose} alt="delete-btn" />
      </DeleteButton>
    </TodoItemWrapper>)
}

const Todo = () => {
  const [list, setList] = useState<TodoItemType[]>([])

  return (
    <FormWrapper>
      <Nav>
        <h1>
          <Name>文森</Name>
          {" "}的土肚力
        </h1>
        <LogoutButton>登出</LogoutButton>
      </Nav>
      <InputTodo placeholder="點此輸入後按下 Enter 新增" />
      <TodoList>
        {list.map(item => <TodoItem data={item} />)}
      </TodoList>
    </FormWrapper>
  )
}

type TodoItemType = {
  id: number;
  content: string;
  isCompleted: boolean;
}

export default Todo;