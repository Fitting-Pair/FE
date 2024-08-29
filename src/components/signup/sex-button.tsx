import { TSignupProps } from "@/types/auth";
import * as S from "./sex-button.style";
import { MdMale, MdFemale } from "react-icons/md";

interface IButton {
  male?: boolean;
  signup: TSignupProps;
}

const SexButton = ({ male, signup }: IButton) => {
  const gender = male ? "male" : "female";
  const { onClick, selected } =
    signup?.getGenderButtonProps?.("gender", gender) || {};

  console.log(selected);

  return (
    <S.Container
      type="button"
      onClick={onClick}
      $selected={selected}
      $male={male}
    >
      {male ? <MdMale /> : <MdFemale />}
    </S.Container>
  );
};

export default SexButton;
