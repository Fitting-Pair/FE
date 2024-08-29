import * as S from "./signup-page.style";

import Icon from "@/assets/images/icon.png";
import Phone from "@/assets/images/phone.png";
import Ruler from "@/assets/images/ruler.png";
import SIGNUP from "@/assets/images/SIGNUP.png";
import { Submit, Input, SexButton, Loading } from "@/components";
import { Link } from "react-router-dom";
import useForm from "@/hooks/useForm";
import { validateSignUp } from "@/utils/validate";
import { useSignup } from "@/hooks/queries/useSignup";

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

  console.log(signupForm.values);

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
      <S.Logo src={SIGNUP} />
      <div>
        <Input
          text={"Nickname"}
          icon={Icon}
          half={false}
          signup={signupForm}
          placeholder={"닉네임"}
        />
        {signupForm.errors.userName && signupForm.touched.userName && (
          <S.ErrorMeg>{signupForm.errors.userName}</S.ErrorMeg>
        )}
      </div>
      <div>
        <Input
          text={"Phone"}
          icon={Phone}
          half={false}
          signup={signupForm}
          placeholder={"휴대폰 번호"}
        />
        {signupForm.errors.phoneNumber && signupForm.touched.phoneNumber && (
          <S.ErrorMeg>{signupForm.errors.phoneNumber}</S.ErrorMeg>
        )}
      </div>
      <S.Wrapper>
        <S.ButtonBox>
          <SexButton male={true} signup={signupForm} />
          <hr />
          <SexButton signup={signupForm} />
        </S.ButtonBox>
        {signupForm.errors.userGender && signupForm.touched.userGender && (
          <S.ErrorMeg>{signupForm.errors.userGender}</S.ErrorMeg>
        )}
        <div>
          <Input
            text={"Height"}
            icon={Ruler}
            half={true}
            signup={signupForm}
            placeholder={"키"}
          />
          {signupForm.errors.height && signupForm.touched.height && (
            <S.ErrorMeg>{signupForm.errors.height}</S.ErrorMeg>
          )}
        </div>
      </S.Wrapper>

      <Submit
        text={"SUBMIT"}
        width={"530px"}
        onClick={handleSubmit}
        disabled={handleDisabled()}
      />

      <S.GoLogin>
        Do you have a id ?<Link to="/login">Log in</Link>
      </S.GoLogin>
    </S.Container>
  );
};

export default SignUpPage;
