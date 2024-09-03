import * as S from "./mobile-result.style";

import { useEffect } from "react";
import { MoblieIcon } from "@/components";
import { useLocation, useNavigate } from "react-router-dom";
import { TResultProps } from "@/types/result";

const MoblieResultPage = () => {
  const { state }: { state: TResultProps } = useLocation();

  const nav = useNavigate();
  const date = "MAY, 13TH";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.Container>
      <MoblieIcon text={date} />
      <S.ResultWrapper>
        <S.Title>
          닉네임, <br /> <span>{state?.bodyTypeName}</span> 체형입니다.
        </S.Title>
        <S.ResultImg src={state?.objFile} />
        <S.ContentWrapper>
          <S.ContentBox>
            <div>*신체 치수</div>
            <span>
              <p> 키(신장) : 184cm</p>
              <p>어깨 단면 : 48cm</p>
              <p>가슴 둘레 : 92cm</p>
              <p>허리 둘레 : 74cm</p>
              <p>엉덩이 둘레 : 98cm</p>
            </span>
          </S.ContentBox>
          <S.ContentBox>
            <div>체형 분석</div>
            <span>{state?.bodyTypeFeature}</span>
          </S.ContentBox>
          <S.ContentBox>
            <div>코디 주의사항</div>
            <span>{state?.bodyTypeCareful}</span>
          </S.ContentBox>
        </S.ContentWrapper>
        <S.SeletedWrapper>
          <h1>나만의 의류 리스트</h1>
          <S.ApparelWrapper>
            <img
              src={state?.userStylingResponseDto.userTopClothesDto.imageUrl}
              onClick={() =>
                nav(
                  `/my-page/result/detail/${state?.userStylingResponseDto.userTopClothesDto.name}`,
                  {
                    state: {
                      ...state?.userStylingResponseDto.userTopClothesDto,
                    },
                  },
                )
              }
            />
            <img
              src={
                state?.userStylingResponseDto.userBottomClothesItemsDto.imageUrl
              }
              onClick={() =>
                nav(
                  `/my-page/result/detail/${state?.userStylingResponseDto.userBottomClothesItemsDto.name}`,
                  {
                    state: {
                      ...state?.userStylingResponseDto
                        .userBottomClothesItemsDto,
                    },
                  },
                )
              }
            />
          </S.ApparelWrapper>
        </S.SeletedWrapper>
      </S.ResultWrapper>
    </S.Container>
  );
};

export default MoblieResultPage;
