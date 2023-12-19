import { useForm, SubmitHandler } from "react-hook-form";
import {
  FormWrapper,
  Title,
  SubTitle,
  Form,
  FormButton,
  FormLink,
  Input,
  InputAlert,
} from "../../Styled/FormStyle";
import { rules } from "./rules";
import { apiSignIn } from "../../api";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const { setToken } = useAuth();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<InputsType>({ mode: "all" });

  const onSubmit: SubmitHandler<InputsType> = async ({ email, password }) => {
    const data = { email, password };

    const res = await apiSignIn(data);

    if (res.status) {
      setToken(res.token);
    } else {
      alert(res.message);
    }
  };

  return (
    <FormWrapper>
      <Title>歡迎使用土肚力^O^</Title>
      <SubTitle>反正寫了也不一定會做</SubTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <div>電子信箱</div>
          <Input type="email" {...register("email", rules.email)} />
          <InputAlert>{errors.email?.message}</InputAlert>
        </label>
        <label>
          <div>密碼</div>
          <Input type="password" {...register("password", rules.password)} />
          <InputAlert>{errors.password?.message}</InputAlert>
        </label>
        <FormButton type="submit">登入</FormButton>
      </Form>
      <FormLink to="/signup">第一次使用嗎？點此註冊</FormLink>
    </FormWrapper>
  );
};

type InputsType = {
  email: RegExp;
  password: string;
};

export default Login;
