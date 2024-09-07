import { TResultProps } from "@/types/result";
import LOGO from "@/assets/images/Logo.webp";

import * as S from "./result.style";
import useAuthStore from "@/store/useAuthStore";

interface ResultProps {
  result: TResultProps;
}

const ResultPaper = ({ result }: ResultProps) => {
  const {
    bodyTypeName,
    objFile,
    userStylingResponseDto,
    bodyTypeCareful,
    bodyTypeFeature,
  } = result;

  const { userName } = useAuthStore();
  if (userName)
    return (
      <S.Container>
        <S.ResultWrapper>
          <S.UserWrapper>
            <S.ResultTitle>
              <S.UserBody>
                {userName},
                <br />
                <span>{bodyTypeName}</span> 체형입니다.
              </S.UserBody>
              <S.BodySizeWrapper>
                <div>*신체 치수</div>
                <ul>
                  <li> 키(신장) : {result.userBodySizeResponseDto.height}cm</li>
                  <li>
                    어깨 단면 :
                    {Math.round(result.userBodySizeResponseDto.shoulderSize)}
                    cm
                  </li>
                  <li>
                    가슴 둘레 :
                    {Math.round(result.userBodySizeResponseDto.chestSize)}cm
                  </li>
                  <li>
                    허리 둘레 :
                    {Math.round(result.userBodySizeResponseDto.waistSize)}cm
                  </li>
                  <li>
                    엉덩이 둘레 :
                    {Math.round(result.userBodySizeResponseDto.hipSize)}cm
                  </li>
                </ul>
              </S.BodySizeWrapper>
            </S.ResultTitle>
            <S.BodyImg>
              <img src={objFile} />
            </S.BodyImg>
          </S.UserWrapper>
          <S.ResultExplainWrapper>
            <S.ContentWrapper>
              <span>체형 특징</span>
              <p>{bodyTypeFeature.substring(0, 60)} ...</p>
            </S.ContentWrapper>
            <S.ContentWrapper>
              <span>코디 주의사항</span>
              <p>{bodyTypeCareful.substring(0, 60)} ...</p>
            </S.ContentWrapper>
          </S.ResultExplainWrapper>
          <S.FooterWrapper>
            <S.ClothWrapper>
              <section>
                <img src={userStylingResponseDto.userTopClothesDto.imageUrl} />

                <img
                  src={
                    userStylingResponseDto.userBottomClothesItemsDto.imageUrl
                  }
                />
              </section>
            </S.ClothWrapper>
            <img src={LOGO} alt="logo" />
          </S.FooterWrapper>
        </S.ResultWrapper>
      </S.Container>
    );
};

export default ResultPaper;
