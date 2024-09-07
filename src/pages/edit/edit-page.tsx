import { Button, MoblieIcon, MypageBox } from "@/components";
import * as S from "../modify/modify-page.style";
import Icon from "@/assets/images/icon.png";
import Phone from "@/assets/images/phone.png";
import Logo from "@/assets/images/Logo-black.png";
import Ruler from "@/assets/images/ruler.png";
import useGetUserInfo from "@/hooks/queries/auth/useGetUserInfo";
import { MdMale, MdFemale } from "react-icons/md";

const EditPage = () => {
  const { data } = useGetUserInfo();
  if (data)
    return (
      <S.Container>
        <MoblieIcon text="FITTING PAIR" />
        <h1>EDIT</h1>
        <S.InfoWrapper>
          <MypageBox
            edit={true}
            label="닉네임"
            text={data.userName}
            icon={Icon}
            validateText="5자 이내로 입력해주세요."
          />
          <MypageBox
            label="휴대폰 번호"
            text={data.phoneNumber}
            icon={Phone}
            noClick={true}
          />
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
          <MypageBox
            label={"키(신장)"}
            text={data.height}
            icon={Ruler}
            edit={true}
            maxLength={3}
          />
          <Button text="완료" type="button" />
          <Button text="회원탈퇴" type="button" styleType="noBackground" />
        </S.InfoWrapper>
        <S.BlackLogo src={Logo} />
      </S.Container>
    );
};

export default EditPage;
