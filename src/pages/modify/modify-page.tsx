import { Button, MoblieIcon, MypageBox } from "@/components";
import Icon from "@/assets/images/icon.png";
import Phone from "@/assets/images/phone.png";
import Logo from "@/assets/images/Logo-black.png";
import Ruler from "@/assets/images/ruler.png";
import { MdMale, MdFemale } from "react-icons/md";

import * as S from "./modify-page.style";
import useGetUserInfo from "@/hooks/queries/auth/useGetUserInfo";

const ModifyPage = () => {
  const { data } = useGetUserInfo();

  console.log(data);
  if (data)
    return (
      <S.Container>
        <MoblieIcon text="FITTING PAIR" />
        <h1>MY PAGE</h1>
        <S.InfoWrapper>
          <MypageBox label="닉네임" text={data.userName} icon={Icon} />
          <MypageBox label="휴대폰 번호" text={data.phoneNumber} icon={Phone} />
          <S.SEXBox $male={data.gender === "male"}>
            <p>성별</p>
            <S.ButtonBox>
              <button className="male">
                <MdMale />
              </button>
              <hr />
              <button className="female">
                <MdFemale />
              </button>
            </S.ButtonBox>
          </S.SEXBox>
          <MypageBox label={"키(신장)"} text={data.height} icon={Ruler} />
          <Button text="수정하기" type="button" />
          <Button text="회원탈퇴" type="button" styleType="noBackground" />
        </S.InfoWrapper>
        <S.BlackLogo src={Logo} />
      </S.Container>
    );
};

export default ModifyPage;
