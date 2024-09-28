import { ButtonHTMLAttributes } from "react";
import * as S from "./submit-btn.style";

interface ISubmitProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onBlur?: () => void;
  disabled?: boolean;
}

const Submit = ({ text, ...rest }: ISubmitProps) => {
  return (
    <S.Container type="submit" {...rest}>
      {text}
    </S.Container>
  );
};

export default Submit;
