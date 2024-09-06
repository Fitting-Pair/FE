import * as S from "./style-page.style";

import {
  ClothComponent,
  Error,
  Icon,
  Loading,
  TopComponent,
} from "@/components";
import { useParams } from "react-router-dom";
import useLoadingStore from "@/store/useLoadingStore";
import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { ApparelSwiper } from "@/components";
import { getBodyCheckResult } from "@/apis/results";
import { TData, TSelectCloth } from "@/types/result";
import usePostResult from "@/hooks/queries/results/usePostResult";
import { Triangle, Reactangle, Round } from "@/assets/images/body-check";

const StylingPage = () => {
  const { imgId } = useParams();
  const { loading, setLoading } = useLoadingStore((state) => state);
  const [result, setResult] = useState<TData | null>(null);
  const [cloth, setCloth] = useState<TSelectCloth>({
    topName: "",
    bottomName: "",
  });

  const { mutate } = usePostResult(Number(result?.resultId));

  const fetchResult = async () => {
    try {
      const data = await getBodyCheckResult(Number(imgId));

      return data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(
      async () => {
        const data = await fetchResult();
        if (data) {
          setResult(data.data);
          setLoading(false);
        }
      },
      1000 * 60 * 3.5,
    );

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = () => {
    mutate({
      resultId: Number(result?.resultId),
      topName: cloth.topName,
      bottomName: cloth.bottomName,
    });
  };

  if (loading) {
    return <Loading text={"분석중 ..."} />;
  } else if (!loading && result) {
    return (
      <S.Container>
        <Icon blackNum={2} />
        <S.ContentResultContainer>
          <S.ResultBodyType>
            <img src={Reactangle} alt="icons" className="reactangle" />
            <S.ResultSize>
              <S.ResultTitle>
                000님,
                <br />
                <span>{result.bodyTypeName}</span> 체형입니다.
              </S.ResultTitle>
              <S.BodySizeWrapper>
                <h5>*신체치수</h5>
                <ul>
                  <li>
                    키(신장) : <b>{result.userBodySizeResponseDto.height}cm</b>
                  </li>
                  <li>
                    어깨 단면 :
                    <b>
                      {Math.round(result.userBodySizeResponseDto.shoulderSize)}
                      cm
                    </b>
                  </li>
                  <li>
                    가슴 둘레 :
                    <b>
                      {Math.round(result.userBodySizeResponseDto.chestSize)}cm
                    </b>
                  </li>
                  <li>
                    허리 둘레 :
                    <b>
                      {Math.round(result.userBodySizeResponseDto.waistSize)}cm
                    </b>
                  </li>
                  <li>
                    엉덩이 둘레 :
                    <b>
                      {Math.round(result.userBodySizeResponseDto.hipSize)}cm
                    </b>
                  </li>
                </ul>
              </S.BodySizeWrapper>
            </S.ResultSize>
            <S.ResultImg>
              <img src={result.objFile} />
            </S.ResultImg>
          </S.ResultBodyType>

          <S.ResultExplainWrapper>
            <S.ContentWrapper>
              <img src={Triangle} alt="icons" />
              <span>- 체형 특징</span>
              <p>{result.bodyTypeFeature}</p>
            </S.ContentWrapper>
            <S.ContentWrapper>
              <img src={Round} alt="icons" />
              <span>- 코디 주의사항</span>
              <p>{result.bodyTypeCareful}</p>
            </S.ContentWrapper>
          </S.ResultExplainWrapper>

          <S.ClothWrapper>
            <S.Category>상의</S.Category>
            <S.Slider>
              <ApparelSwiper>
                {result.clothesDto.topClothesItems.map((e, idx) => (
                  <SwiperSlide key={idx}>
                    <TopComponent
                      appearl={e}
                      setCloth={setCloth}
                      cloth={cloth}
                    />
                  </SwiperSlide>
                ))}
              </ApparelSwiper>
            </S.Slider>
          </S.ClothWrapper>
          <S.ClothWrapper>
            <S.Category>하의</S.Category>
            <S.Slider>
              <ApparelSwiper>
                {result.clothesDto.bottomClothesItems.map((e, idx) => (
                  <SwiperSlide key={idx}>
                    <ClothComponent
                      appearl={e}
                      setCloth={setCloth}
                      cloth={cloth}
                    />
                  </SwiperSlide>
                ))}
              </ApparelSwiper>
            </S.Slider>
          </S.ClothWrapper>
          <S.Button onClick={handleSubmit}>결과지 제작</S.Button>
        </S.ContentResultContainer>
      </S.Container>
    );
  } else {
    return <Error />;
  }
};

export default StylingPage;
