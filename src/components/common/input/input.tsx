import * as S from "./input.style";
import { ISignupProps } from "@/types/auth";

interface IInput {
  text: string;
  icon: string;
  half?: boolean;
  signup: ISignupProps;
  placeholder: string;
}

const Input = ({ text, icon, half, signup, placeholder }: IInput) => {
  if (text === "Phone") {
    return (
      <S.Container $half={half}>
        <input
          placeholder={placeholder}
          {...signup.getPhoneNumInputProps("phoneNumber")}
          maxLength={13}
        />
        <img src={icon} />
      </S.Container>
    );
  } else {
    return (
      <S.Container $half={half}>
        {text === "Height" ? (
          <input
            placeholder={placeholder}
            {...signup.getTextInputProps("height")}
            maxLength={3}
          />
        ) : (
          <input
            placeholder={placeholder}
            {...signup.getTextInputProps("userName")}
          />
        )}

        <img src={icon} />
      </S.Container>
    );
  }
};

export default Input;
