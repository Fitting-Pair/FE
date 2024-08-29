import { TSignup } from "@/types/auth";
import * as S from "./sex-button.style";
import { MdMale, MdFemale } from "react-icons/md";

interface IButton {
  male?: boolean;
  signup: TSignup;
}

const SexButton = ({ male, signup }: IButton) => {
  const gender = male ? "male" : "female";
  //   const { onClick } = signup.getGenderButtonProps(gender);

  return (
    <S.Container
      type="button"
      // onClick={onClick}
      // $selected={selected}
      $male={male}
    >
      {male ? <MdMale /> : <MdFemale />}
    </S.Container>
  );
};

export default SexButton;
