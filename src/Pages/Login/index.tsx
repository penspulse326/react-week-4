import { LoginWrapper, Title, Form, InputWrapper, Input, Button } from "./styled"

const Login = () => (
  <LoginWrapper>
    <Title>歡迎使用土肚力^O^</Title>
    <Form>
      <InputWrapper>
        <div>電子信箱</div>
        <Input type="text" />
      </InputWrapper>
      <InputWrapper>
        <div>密碼</div>
        <Input type="text" />
      </InputWrapper>
      <Button type="button">登入</Button>
    </Form>
  </LoginWrapper>
)

export default Login;