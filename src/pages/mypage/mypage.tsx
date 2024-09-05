import * as S from "./mypage.style";

import {
  Loading,
  MoblieIcon,
  ResultPaper,
  SwiperComponent,
} from "@/components";
import Logo from "@/assets/images/Logo-black.png";
import { useNavigate } from "react-router-dom";
import useGetAllResult from "@/hooks/queries/results/useGetAllResult";
import { SwiperSlide } from "swiper/react";
import { TResultProps } from "@/types/result";
import useGetUserInfo from "@/hooks/queries/auth/useGetUserInfo";

const MyPage = () => {
  const nav = useNavigate();
  const { data, isPending } = useGetAllResult();
  const { data: userInfo } = useGetUserInfo();

  let content;

  if (isPending) {
    content = (
      <S.LoadingBox>
        <Loading text={"불러오는 중..."} />
      </S.LoadingBox>
    );
  }

  if (data && userInfo) {
    const one = data.length === 1;

    //TODO: 날짜 변경
    content = (
      <S.PreviousResultWrapper $one={one}>
        <SwiperComponent>
          {data?.map((e: TResultProps) => (
            <SwiperSlide key={e.resultId}>
              <S.PreviousData
                onClick={() =>
                  nav(`/my-page/result/${e.resultId}`, {
                    state: { ...userInfo },
                  })
                }
              >
                <ResultPaper result={e} />
              </S.PreviousData>
              <S.MyPageDate>{e.localDate.split("T")[0]}</S.MyPageDate>
            </SwiperSlide>
          ))}
        </SwiperComponent>
      </S.PreviousResultWrapper>
    );
  }

  return (
    <S.Container>
      <MoblieIcon text="MYPAGE" noBack={true} />
      <S.MyResultTitle>
        PREVIOUS <br />
        RESULT
      </S.MyResultTitle>
      {content}
      <S.BlackLogo src={Logo} />
    </S.Container>
  );
};

export default MyPage;
