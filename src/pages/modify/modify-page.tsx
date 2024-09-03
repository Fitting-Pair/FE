import { MypageBox } from "@/components";
import * as S from "./modify-page.style";
import Icon from "@/assets/images/icon.png";
import Phone from "@/assets/images/phone.png";

const ModifyPage = () => {
  return (
    <S.Container>
      <h1>MY PAGE</h1>
      <MypageBox label={"닉네임"} text={"닉네임"} icon={Icon} />
      <MypageBox label={"휴대폰 번호"} text={"010-1234-1234"} icon={Phone} />
    </S.Container>
  );
};

export default ModifyPage;
