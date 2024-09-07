import { ButtonHTMLAttributes } from "react";

import * as S from "./button.style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: () => void;
  styleType?: "basic" | "noBackground";
}

const Button = ({ text, onClick, styleType = "basic" }: ButtonProps) => {
  return (
    <S.Button onClick={onClick} $styleType={styleType}>
      {text}
    </S.Button>
  );
};

export default Button;
