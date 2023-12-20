import { useState } from "react";
import { FormWrapper } from "../../Styled/FormStyle";
import {
  Nav,
  Name,
  LogoutButton,
  InputTodo,
  TodoList,
  TodoItemWrapper,
  TodoToggle,
  TodoContent,
  DeleteButton,
} from "./styled";
import ImgClose from "../../assets/icon-close.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { apiSignOut } from "../../api";
import { useAuth } from "../../context/AuthContext";

const TodoItem = ({ data }: { data: TodoItemType }) => {
  const { id, content, isCompleted } = data;

  return (
    <TodoItemWrapper>
      <div>
        <TodoToggle type="checkbox" checked={isCompleted} />
        <TodoContent>{content}</TodoContent>
      </div>
      <DeleteButton data-id={id}>
        <img src={ImgClose} alt="delete-btn" />
      </DeleteButton>
    </TodoItemWrapper>
  );
};

const Todo = () => {
  const { token, setToken } = useAuth();
  const { nickname } = useLocation().state;

  const [list, setList] = useState<TodoItemType[]>([]);

  const navigate = useNavigate();
  const handleSignOut = async () => {
    const res = await apiSignOut(token);
    alert(res.message);
    navigate("/");
  };

  return (
    <FormWrapper>
      <Nav>
        <h1>
          <Name>{nickname}</Name> 的土肚力
        </h1>
        <LogoutButton onClick={handleSignOut}>登出</LogoutButton>
      </Nav>
      <InputTodo placeholder="點此輸入後按下 Enter 新增" />
      <TodoList>
        {list.map((item) => (
          <TodoItem data={item} />
        ))}
      </TodoList>
    </FormWrapper>
  );
};

type TodoItemType = {
  id: number;
  content: string;
  isCompleted: boolean;
};

export default Todo;
