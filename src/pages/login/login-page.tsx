import * as S from "./login-page.style";
import LOGO from "@/assets/images/Logo.webp";
import { Loading, Submit } from "@/components";
import Icon from "@/assets/images/icon.png";
import useForm from "@/hooks/useForm";
import { validatePhoneNumber } from "@/utils/validate";
import { useLogin } from "@/hooks/queries/useLogin";

const LoginPage = () => {
  const loginForm = useForm({
    initialValue: {
      phoneNumber: "",
    },
    validate: validatePhoneNumber,
  });

  const { mutate, isPending } = useLogin();

  const handleSubmit = () => {
    mutate({
      phoneNumber: loginForm.values.phoneNumber.replace(/-/g, ""),
    });
  };

  if (isPending) {
    return <Loading text={"로그인 중 ..."} />;
  }

  return (
    <S.Container>
      <S.LogoWrapper>
        <img src={LOGO} />
      </S.LogoWrapper>
      <S.Wrapper onSubmit={(e) => e.preventDefault()}>
        <S.InputBox>
          <img src={Icon} />
          <input
            placeholder="휴대폰 번호"
            {...loginForm.getPhoneNumInputProps("phoneNumber")}
            maxLength={13}
          />
        </S.InputBox>
        {loginForm.errors.phoneNumber && loginForm.touched.phoneNumber && (
          <S.ErrorMeg>{loginForm.errors.phoneNumber}</S.ErrorMeg>
        )}
        <Submit
          text={"log in"}
          width={"268px"}
          login={true}
          onClick={handleSubmit}
          disabled={loginForm.errors.phoneNumber !== ""}
        />
      </S.Wrapper>
    </S.Container>
  );
};

export default LoginPage;
