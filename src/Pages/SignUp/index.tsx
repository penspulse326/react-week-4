import { useForm, SubmitHandler } from "react-hook-form";
import {
  FormWrapper,
  Title,
  SubTitle,
  Form,
  Input,
  InputAlert,
  FormButton,
  FormLink,
} from "../../Styled/FormStyle";
import { rules } from "./rules";
import { apiSignUp } from "../../api";

const SignUp = () => {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm<InputsType>({ mode: 'all', });

  const onSubmit: SubmitHandler<InputsType> = async ({ email, password, nickname }) => {
    const data = {
      email,
      password,
      nickname
    }

    const res = await apiSignUp(data)
    console.log(res)
  }

  const comparePassword = (value: string) => value === getValues("password") || "密碼不一致"

  return (
    <FormWrapper>
      <Title>歡迎註冊土肚力^O^</Title>
      <SubTitle>註冊了就要用不然別注冊</SubTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <div>電子信箱</div>
          <Input type="email" {...register("email", rules.email)} />
          <InputAlert>{errors.email?.message}</InputAlert>
        </label>
        <label>
          <div>暱稱</div>
          <Input type="text" {...register("nickname", rules.nickname)} />
          <InputAlert>{errors.nickname?.message}</InputAlert>
        </label>
        <label>
          <div>密碼</div>
          <Input type="password" {...register("password", rules.password)} />
          <InputAlert>{errors.password?.message}</InputAlert>
        </label>
        <label>
          <div>確認密碼</div>
          <Input type="password" {...register("compare", { ...rules.compare, validate: comparePassword })} />
          <InputAlert>{errors.compare?.message}</InputAlert>
        </label>
        <FormButton type="submit">註冊</FormButton>
      </Form>
      <FormLink to="/signup">已經有帳號了嗎？點此登入</FormLink>
    </FormWrapper>
  );
};

type InputsType = {
  email: RegExp;
  password: string;
  nickname: string;
  compare: string;
};

export default SignUp;
