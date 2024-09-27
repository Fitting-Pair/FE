import * as S from "./input.style";
import { ISignupProps } from "@/types/auth";

interface IInput {
  text: string;
  icon: string;
  signup: ISignupProps;
  placeholder: string;
}

const Input = ({ text, icon, signup, placeholder }: IInput) => {
  if (text === "Phone") {
    return (
      <S.Container>
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
      <S.Container>
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
