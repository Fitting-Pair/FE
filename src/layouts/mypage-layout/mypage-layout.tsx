import * as S from "./mypage-layout.style";

import { Outlet } from "react-router-dom";

const MyPageLayout = () => {
  return (
    <S.Container>
      <S.OutletContainer>
        <Outlet />
      </S.OutletContainer>
    </S.Container>
  );
};

export default MyPageLayout;
