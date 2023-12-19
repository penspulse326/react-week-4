import styled from "styled-components";
import { Link } from "react-router-dom";
import { MQ_MD } from "../constants/style_variants";

export const FormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  padding: 60px 40px;
  margin: 100px 15px;
  width: 500px;

  border: 1px solid grey;

  background-color: white;
  box-shadow: 8px 8px 1px 1px #444;

  color: #333;

  ${MQ_MD} {
    max-width: 351px;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 8px;

    font-size: 18px;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
`;

export const SubTitle = styled.h2`
  color: gray;
  font-size: 18px;
  font-weight: 700;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  margin-top: 20px;

  text-align: center;
`;

export const FormButton = styled.button`
  margin-top: 20px;
  padding: 8px 0;
  width: 50%;

  border: 1px solid transparent;
  border-radius: 28px;

  background-color: black;

  color: white;
  font-size: 20px;
  font-weight: 900;

  transition: 0.3s;
  cursor: pointer;

  &:hover {
    border: 1px solid #888;

    background-color: white;

    color: black;
  }
`;

export const FormLink = styled(Link)`
  display: block;

  padding: 2px;

  background-image: linear-gradient(#000, #000);
  background-position: left bottom;
  background-size: 0 3px;
  background-repeat: no-repeat;

  color: black;

  transition: 0.3s;

  &:hover {
    background-size: 100% 3px;
  }
`;

export const Input = styled.input`
  padding: 8px 20px;
  width: 240px;

  border: 1px solid #888;
  border-radius: 20px;

  font-size: 18px;
`

export const InputAlert = styled.span`
  height: 14px;

  color: tomato;
  font-size: 14px;
`