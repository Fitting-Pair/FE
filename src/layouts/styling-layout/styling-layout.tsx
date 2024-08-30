import { Outlet } from "react-router-dom";
import * as S from "./styling-layout.style";

const StylingLayout = () => {
  return (
    <S.Container>
      <Outlet />
    </S.Container>
  );
};

export default StylingLayout;
