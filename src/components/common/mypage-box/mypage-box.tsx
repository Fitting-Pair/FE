import { InputHTMLAttributes } from "react";
import * as S from "./mypage-box.style";

interface TInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: string;
  label?: string;
  text: string;
  validateText?: string;
  edit?: boolean;
  noClick?: boolean;
}

const MypageBox = ({
  icon,
  label,
  text,
  validateText,
  edit = false,
  noClick = false,
  ...rest
}: TInputProps) => {
  return (
    <S.Container>
      <label>{label}</label>
      <p>{validateText}</p>
      <S.Box $noClick={noClick}>
        {edit ? <input placeholder={text} {...rest} /> : <p>{text}</p>}
        <img src={icon} />
      </S.Box>
    </S.Container>
  );
};

export default MypageBox;
