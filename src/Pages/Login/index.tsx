import { FormWrapper, Title, SubTitle, Form, InputWrapper, Input, InputAlert, FormButton, FormLink, } from "../../components/Form"

const Login = () => (
  <FormWrapper>
    <Title>歡迎使用土肚力^O^</Title>
    <SubTitle>反正寫了也不一定會做</SubTitle>
    <Form>
      <InputWrapper>
        <div>電子信箱</div>
        <Input type="text" />
        <InputAlert>123</InputAlert>
      </InputWrapper>
      <InputWrapper>
        <div>密碼</div>
        <Input type="text" />
        <InputAlert></InputAlert>
      </InputWrapper>
      <FormButton type="button">登入</FormButton>
    </Form>
    <FormLink to="/signup">第一次使用嗎？點此註冊</FormLink>
  </FormWrapper>
)

export default Login;