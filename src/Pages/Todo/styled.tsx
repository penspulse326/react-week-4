import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;

  width: 100%;

  font-size: 18px;
`
export const Name = styled.span`
  font-weight: 900;
`

export const LogoutButton = styled.div`
  border: none;

  font-weight: 900;

  cursor: pointer;
`

export const InputTodo = styled.input`
  padding: 8px;
  width: 100%;

  border: none;
  outline: none;

  background-image: linear-gradient(#111,#111);
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 0% 3px;

  font-size: 24px;
  text-align: center;

  transition: 0.3s;

  &:focus {
    background-size: 100% 3px;
  }

  &::placeholder {
    color: #AAA
  }
`

export const TodoList = styled.ul`
  width: 80%;
`

export const TodoItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 8px 12px 12px 8px;

  border-bottom: 1px solid black;

  div {
    display: flex;
    align-items: center;
  }
`

export const TodoToggle = styled.input`
  margin-right: 12px;
  width: 20px;
  height: 20px;
`

export const TodoContent = styled.span`
  
`

export const DeleteButton = styled.button`
  border: none;

  background-color: transparent;

  cursor: pointer;
`