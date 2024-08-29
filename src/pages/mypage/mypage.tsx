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

const MyPage = () => {
  const nav = useNavigate();
  const { data, isPending } = useGetAllResult();

  let content;

  if (isPending) {
    content = (
      <S.LoadingBox>
        <Loading text={"불러오는 중..."} />
      </S.LoadingBox>
    );
  }

  if (data) {
    const one = data.length === 1;

    content = (
      <S.PreviousResultWrapper $one={one}>
        <SwiperComponent>
          {data?.map((e: TResultProps) => (
            <SwiperSlide key={e.id}>
              <S.PreviousData
                onClick={() =>
                  nav(`/my-page/result/${e.id}`, { state: { ...e } })
                }
              >
                <ResultPaper result={e} />
              </S.PreviousData>
              <S.MyPageDate>{"April,10th"}</S.MyPageDate>
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
