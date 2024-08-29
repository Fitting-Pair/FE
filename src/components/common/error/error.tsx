import * as S from "./error.style";

import { useNavigate } from "react-router-dom";
import { AiFillAlert } from "react-icons/ai";

const Error = () => {
  const nav = useNavigate();
  return (
    <S.Container>
      <AiFillAlert />
      <h2>오류가 발생했습니다</h2>
      <p onClick={() => nav(-1)}>이전화면으로 돌아가기</p>
    </S.Container>
  );
};

export default Error;
