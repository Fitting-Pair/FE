import * as S from "./mypage.style";

import { MoblieIcon } from "@/components";
import Logo from "@/assets/images/Logo-black.png";

const MyPage = () => {
  return (
    <S.Container>
      <MoblieIcon text="MYPAGE" noBack={true} />
      <S.MyResultTitle>
        PREVIOUS <br />
        RESULT
      </S.MyResultTitle>
      <S.BlackLogo src={Logo} />
    </S.Container>
  );
};

export default MyPage;
