import * as S from "./signup-page.style";

import Icon from "@/assets/images/icon.png";
import Phone from "@/assets/images/phone.png";
import Ruler from "@/assets/images/ruler.png";
import SIGNUP from "@/assets/images/SIGNUP.png";
import { Submit, Input, SexButton, Loading } from "@/components";
import { Link } from "react-router-dom";
import useForm from "@/hooks/useForm";
import { validateSignUp } from "@/utils/validate";
import { useSignup } from "@/hooks/queries/auth/useSignup";

const SignUpPage = () => {
  const signupForm = useForm({
    initialValue: {
      userName: "",
      phoneNumber: "",
      height: "",
      gender: "",
    },
    validate: validateSignUp,
  });

  const { mutate, isPending } = useSignup();

  const handleSubmit = () => {
    mutate({
      userName: signupForm.values.userName,
      phoneNumber: signupForm.values.phoneNumber.replace(/-/g, ""),
      height: parseInt(signupForm.values.height),
      gender: signupForm.values.gender,
    });
  };

  const handleDisabled = () => {
    const { phoneNumber, userName, height, gender } = signupForm.errors;
    return !(
      phoneNumber === "" &&
      userName === "" &&
      height === "" &&
      gender === ""
    );
  };

  if (isPending) {
    return <Loading text={"회원가입 중 ..."} />;
  }

  return (
    <S.Container>
      <S.Logo src={SIGNUP} alt="logo" />
      <S.SignUpContainer>
        <S.InputBox>
          <Input
            text={"Nickname"}
            icon={Icon}
            signup={signupForm}
            placeholder={"닉네임"}
          />
          {signupForm.errors.userName && signupForm.touched.userName && (
            <S.ErrorMeg>{signupForm.errors.userName}</S.ErrorMeg>
          )}
        </S.InputBox>
        <S.InputBox>
          <Input
            text={"Phone"}
            icon={Phone}
            signup={signupForm}
            placeholder={"휴대폰 번호"}
          />
          {signupForm.errors.phoneNumber && signupForm.touched.phoneNumber && (
            <S.ErrorMeg>{signupForm.errors.phoneNumber}</S.ErrorMeg>
          )}
        </S.InputBox>
        <S.HalfWrapper>
          <S.ButtonBox>
            <SexButton male={true} signup={signupForm} />
            <hr />
            <SexButton signup={signupForm} />
          </S.ButtonBox>
          <S.InputBox>
            <Input
              text={"Height"}
              icon={Ruler}
              signup={signupForm}
              placeholder={"키"}
            />
            {/* {signupForm.errors.height && signupForm.touched.height && (
              <S.ErrorMeg className="height-error">
                {signupForm.errors.height}
              </S.ErrorMeg>
            )} */}
          </S.InputBox>
        </S.HalfWrapper>
        <S.ButtonWrapper>
          <Submit
            text={"SUBMIT"}
            onClick={handleSubmit}
            disabled={handleDisabled()}
          />
          <S.GoLogin>
            Do you have a id ?<Link to="/login">Log in</Link>
          </S.GoLogin>
        </S.ButtonWrapper>
      </S.SignUpContainer>
    </S.Container>
  );
};

export default SignUpPage;
