import * as S from "./mobile-result.style";

import { useEffect } from "react";
import { Loading, MoblieIcon } from "@/components";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useGetResult from "@/hooks/queries/results/useGetResult";
import { TUser } from "@/types/auth";

const MoblieResultPage = () => {
  const { state }: { state: TUser } = useLocation();
  const { id } = useParams();

  const nav = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, isPending } = useGetResult(Number(id));

  if (isPending) {
    return (
      <S.LoadingContainer>
        <Loading text={"불러오는중 ..."} />;
      </S.LoadingContainer>
    );
  }

  if (data && state)
    return (
      <S.Container>
        <MoblieIcon text={data.localDate.split("T")[0]} />
        <S.ResultWrapper>
          <S.Title>
            {state.userName}, <br /> <span>{data.bodyTypeName}</span>{" "}
            체형입니다.
          </S.Title>
          <S.ResultImg src={data.objFile} />
          <S.ContentWrapper>
            <S.ContentBox>
              <div>*신체 치수</div>
              <span>
                <p> 키(신장) : {data.userBodySizeResponseDto.height}cm</p>
                <p>
                  어깨 단면 :
                  {Math.round(data.userBodySizeResponseDto.shoulderSize)}
                  cm
                </p>
                <p>
                  가슴 둘레 :
                  {Math.round(data.userBodySizeResponseDto.chestSize)}cm
                </p>
                <p>
                  허리 둘레 :
                  {Math.round(data.userBodySizeResponseDto.waistSize)}cm
                </p>
                <p>
                  엉덩이 둘레 :
                  {Math.round(data.userBodySizeResponseDto.hipSize)}cm
                </p>
              </span>
            </S.ContentBox>
            <S.ContentBox>
              <div>체형 분석</div>
              <span>{data.bodyTypeFeature}</span>
            </S.ContentBox>
            <S.ContentBox>
              <div>코디 주의사항</div>
              <span>{data.bodyTypeCareful}</span>
            </S.ContentBox>
          </S.ContentWrapper>
          <S.SeletedWrapper>
            <h1>나만의 의류 리스트</h1>
            <S.ApparelWrapper>
              <img
                src={data.userStylingResponseDto.userTopClothesDto.imageUrl}
                onClick={() =>
                  nav(
                    `/my-page/result/detail/${data.userStylingResponseDto.userTopClothesDto.name}`,
                    {
                      state: {
                        ...data.userStylingResponseDto.userTopClothesDto,
                      },
                    },
                  )
                }
              />
              <img
                src={
                  data.userStylingResponseDto.userBottomClothesItemsDto.imageUrl
                }
                onClick={() =>
                  nav(
                    `/my-page/result/detail/${data.userStylingResponseDto.userBottomClothesItemsDto.name}`,
                    {
                      state: {
                        ...data.userStylingResponseDto
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
