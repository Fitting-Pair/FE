import { ButtonHTMLAttributes } from "react";
import * as S from "./submit-btn.style";

interface ISubmitProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  width: string;
  login?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onBlur?: () => void;
  disabled?: boolean;
}

const Submit = ({ text, width, login, ...rest }: ISubmitProps) => {
  return (
    <S.Container width={width} $login={login} type="submit" {...rest}>
      {text}
    </S.Container>
  );
};

export default Submit;
