import * as S from "./mypage.style";

import {
  Loading,
  MobileIcon,
  ResultPaper,
  SwiperComponent,
} from "@/components";
import Logo from "@/assets/images/Logo-black.png";
import { useNavigate } from "react-router-dom";
import useGetAllResult from "@/hooks/queries/results/useGetAllResult";
import { SwiperSlide } from "swiper/react";
import { IResultProps } from "@/types/result";
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

    content = (
      <S.PreviousResultWrapper $one={one}>
        <SwiperComponent>
          {data?.map((e: IResultProps) => (
            <SwiperSlide key={e.resultId}>
              <S.PreviousData
                onClick={() => nav(`/my-page/result/${e.resultId}`)}
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
      <MobileIcon text="MYPAGE" noBack={true} />
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
