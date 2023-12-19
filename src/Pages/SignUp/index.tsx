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

const SignUp = () => {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm<InputsType>({ mode: 'all', });

  const onSubmit: SubmitHandler<InputsType> = (data) => console.log(data);

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
          <Input type="text" {...register("username", rules.username)} />
          <InputAlert>{errors.username?.message}</InputAlert>
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
        <FormButton type="button">登入</FormButton>
      </Form>
      <FormLink to="/signup">第一次使用嗎？點此註冊</FormLink>
    </FormWrapper>
  );
};

type InputsType = {
  email: RegExp;
  password: string;
  username: string;
  compare: string;
};

export default SignUp;
