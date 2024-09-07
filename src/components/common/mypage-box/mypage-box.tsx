import { ButtonHTMLAttributes } from "react";
import * as S from "./mypage-box.style";

interface TInputProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  label?: string;
  text: string;
}

const MypageBox = ({ icon, label, text }: TInputProps) => {
  return (
    <S.Container>
      <label>{label}</label>
      <S.Box>
        <p>{text}</p>
        <img src={icon} />
      </S.Box>
    </S.Container>
  );
};

export default MypageBox;
