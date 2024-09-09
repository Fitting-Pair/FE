import { TResultProps } from "@/types/result";
import useGetUserInfo from "@/hooks/queries/auth/useGetUserInfo";

import * as S from "./result.style";

interface ResultProps {
  result: TResultProps;
}

const ResultPaper = ({ result }: ResultProps) => {
  const { data } = useGetUserInfo();

  if (data)
    return (
      <S.Container>
        <S.ResultWrapper>
          <S.Wrapper>
            <S.ResultTitle>
              {data.userName}님, &nbsp; <span>{result.bodyTypeName}</span>
              체형입니다.
            </S.ResultTitle>
            <S.BodyImg>
              <img src={result.objFile} />
            </S.BodyImg>
            <S.ResultExplainWrapper>
              <S.ContentWrapper>
                <span>체형 특징</span>
                <p>{result.bodyTypeFeature.substring(0, 80)}...</p>
              </S.ContentWrapper>
              <S.ContentWrapper>
                <span>코디 주의사항</span>
                <p>{result.bodyTypeCareful.substring(0, 80)}...</p>
              </S.ContentWrapper>
            </S.ResultExplainWrapper>
            <S.ClothWrapper>
              <span>나만의 의류 리스트</span>
              <section>
                <div>
                  <img
                    src={
                      result.userStylingResponseDto.userTopClothesDto.imageUrl
                    }
                  />
                </div>
                <div>
                  <img
                    src={
                      result.userStylingResponseDto.userBottomClothesItemsDto
                        .imageUrl
                    }
                  />
                </div>
              </section>
            </S.ClothWrapper>
          </S.Wrapper>
        </S.ResultWrapper>
      </S.Container>
    );
};

export default ResultPaper;
