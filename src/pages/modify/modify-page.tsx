import { Button, MoblieIcon, MypageBox } from "@/components";
import Icon from "@/assets/images/icon.png";
import Phone from "@/assets/images/phone.png";
import Logo from "@/assets/images/Logo-black.png";
import Ruler from "@/assets/images/ruler.png";
import { MdMale, MdFemale } from "react-icons/md";

import * as S from "./modify-page.style";

const ModifyPage = () => {
  return (
    <S.Container>
      <MoblieIcon text="FITTING PAIR" />
      <h1>MY PAGE</h1>
      <S.InfoWrapper>
        <MypageBox
          label="닉네임"
          text="닉네임"
          icon={Icon}
          validateText="다른 유저와 겹치 않도록 입력해주세요. (2~20자)"
        />
        <MypageBox
          label="휴대폰 번호"
          text="010-1234-1234"
          icon={Phone}
          validateText="11자리 입력해주세요."
        />
        <S.SEXBox>
          <button>
            <MdMale />
          </button>
          <hr />
          <button>
            <MdFemale />
          </button>
        </S.SEXBox>
        <MypageBox label={"키(신장)"} text={"159cm"} icon={Ruler} />
        <Button text="수정하기" type="button" />
        <Button text="회원탈퇴" type="button" styleType="noBackground" />
      </S.InfoWrapper>
      <S.BlackLogo src={Logo} />
    </S.Container>
  );
};

export default ModifyPage;
