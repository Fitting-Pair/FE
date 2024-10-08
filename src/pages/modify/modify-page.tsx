import { Button, MobileIcon, Modal, MypageBox } from "@/components";
import Icon from "@/assets/images/icon.png";
import Phone from "@/assets/images/phone.png";
import Logo from "@/assets/images/Logo-black.png";
import Ruler from "@/assets/images/ruler.png";
import { MdMale, MdFemale } from "react-icons/md";
import useGetUserInfo from "@/hooks/queries/auth/useGetUserInfo";
import { useNavigate } from "react-router-dom";
import { PAGE_PATH } from "@/constants";
import { useState } from "react";

import * as S from "./modify-page.style";

const ModifyPage = () => {
  const { data } = useGetUserInfo();
  const nav = useNavigate();
  const [open, setOpen] = useState<boolean>(false);

  if (data)
    return (
      <S.Container>
        {open && <Modal setOpen={setOpen} />}
        <MobileIcon text="FITTING PAIR" />
        <h1>MY PAGE</h1>
        <S.InfoWrapper>
          <MypageBox label="닉네임" text={data.userName} icon={Icon} />
          <MypageBox label="휴대폰 번호" text={data.phoneNumber} icon={Phone} />
          <S.SEXBox $male={data.gender === "male"}>
            <p>성별</p>
            <S.ButtonBox>
              <div className="male">
                <MdMale />
              </div>
              <hr />
              <div className="female">
                <MdFemale />
              </div>
            </S.ButtonBox>
          </S.SEXBox>
          <MypageBox
            label={"키(신장)"}
            text={data.height as string}
            icon={Ruler}
          />
          <Button
            text="수정하기"
            type="button"
            onClick={() =>
              nav(`${PAGE_PATH.MY_PAGE}/${PAGE_PATH.EDIT}/${data.id}`)
            }
          />
          <Button
            text="회원탈퇴"
            type="button"
            styleType="noBackground"
            onClick={() => setOpen(true)}
          />
        </S.InfoWrapper>
        <S.BlackLogo src={Logo} />
      </S.Container>
    );
};

export default ModifyPage;
