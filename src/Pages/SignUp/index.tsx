import { FormWrapper, Title, SubTitle, Form, InputWrapper, Input, InputAlert, FormButton, FormLink, } from "../../components/Form"

const SignUp = () => (
  <FormWrapper>
    <Title>歡迎註冊土肚力^O^</Title>
    <SubTitle>註冊了就要用不然別注冊</SubTitle>
    <Form>
      <InputWrapper>
        <div>電子信箱</div>
        <Input type="text" />
        <InputAlert>123</InputAlert>
      </InputWrapper>
      <InputWrapper>
        <div>暱稱</div>
        <Input type="text" />
        <InputAlert>123</InputAlert>
      </InputWrapper>
      <InputWrapper>
        <div>密碼</div>
        <Input type="text" />
        <InputAlert></InputAlert>
      </InputWrapper>
      <InputWrapper>
        <div>確認密碼</div>
        <Input type="text" />
        <InputAlert></InputAlert>
      </InputWrapper>
      <FormButton type="button">登入</FormButton>
    </Form>
    <FormLink to="/signup">第一次使用嗎？點此註冊</FormLink>
  </FormWrapper>
)

export default SignUp;