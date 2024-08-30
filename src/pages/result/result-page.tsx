import * as S from "./result-page.style";

import { Icon } from "@/components";
import { TResultProps } from "@/types/result";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import QRCode from "react-qr-code";

const ResultPage = () => {
  const { state }: { state: TResultProps } = useLocation();
  const captureRef = useRef(null);
  // const nav = useNavigate();

  // const handleCaptureClick = () => {
  //   const e = captureRef.current;
  //   if (e) {
  //     html2canvas(e).then((canvas) => {
  //       const imgData = canvas.toDataURL("image/png");
  //       nav("/capture", { state: { imgData } });
  //     });
  //   }
  // };

  // useEffect(() => {
  //   if (state) {
  //     handleCaptureClick();
  //   }
  // }, [state]);

  return (
    <S.Container ref={captureRef}>
      <Icon blackNum={3} />
      <S.ContentResultContainer>
        <S.ResultWrapper>
          <S.ResultTitle>
            당신은 <span>{state.bodyTypeName}</span> 제형입니다.
          </S.ResultTitle>
          <S.ResultImg>
            <img src={state.objFile} />
          </S.ResultImg>
          <S.ResultExplainWrapper>
            <S.ContentWrapper>
              <span>체형 특징</span>
              <p>{state.bodyTypeFeature}</p>
            </S.ContentWrapper>
            <S.ContentWrapper>
              <span>코디 주의사항</span>
              <p>{state.bodyTypeCareful}</p>
            </S.ContentWrapper>
          </S.ResultExplainWrapper>
          <S.ClothWrapper>
            <span>SELECTED APPAREL</span>
            <section>
              <img
                src={state.userStylingResponseDto.userTopClothesDto.imageUrl}
              />

              <img
                src={
                  state.userStylingResponseDto.userBottomClothesItemsDto
                    .imageUrl
                }
              />
            </section>
          </S.ClothWrapper>
        </S.ResultWrapper>
        <S.QRImg>
          <QRCode size={114} value={`${window.location.href}`} />
        </S.QRImg>
      </S.ContentResultContainer>
    </S.Container>
  );
};

export default ResultPage;
