import styled from "styled-components";

export const LoginWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  padding: 40px 12px;
  margin-top: 100px;
  width: 500px;

  border: 1px solid grey;

  background-color: white;
  box-shadow: 8px 8px 1px 1px #444;

  color: #333;
`

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  margin-top: 20px;

  text-align: center;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  font-size: 18px;
`

export const Input = styled.input`
  padding: 8px;
  width: 240px;

  border: 1px solid #888;
  border-radius: 20px;

  font-size: 18px;
`

export const Button = styled.button`
  padding: 8px 20px;

  border: 1px solid transparent;
  border-radius: 28px;

  background-color: black;

  color: white;
  font-size: 20px;
  font-weight: 900;

  transition: 0.3s;

  &:hover {
    border: 1px solid #888;

    background-color: white;

    color: black;
  }
`