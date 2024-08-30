import * as S from "./style-page.style";

import { ClothComponent, Error, Icon, Loading } from "@/components";
import { useNavigate, useParams } from "react-router-dom";
import useLoadingStore from "@/store/useLoadingStore";
import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { PAGE_PATH } from "@/constants";
import { ApparelSwiper } from "@/components";
import { getBodyCheckResult } from "@/apis/results";
import { TData } from "@/types/result";

const StylingPage = () => {
  const nav = useNavigate();
  const { imgId } = useParams();
  const { loading, setLoading } = useLoadingStore((state) => state);
  const [result, setResult] = useState<TData | null>(null);

  const fetchResult = async () => {
    try {
      const data = await getBodyCheckResult(imgId as string);

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

  if (loading) {
    return <Loading text={"분석중 ..."} />;
  } else if (!loading && result) {
    return (
      <S.Container>
        <Icon blackNum={2} />

        <S.ContentResultContainer>
          <S.ResultWrapper>
            <S.ResultTitle>
              당신은 <span>{result.bodyTypeName}</span> 체형입니다.
            </S.ResultTitle>
            <S.ResultImg>
              <img src={result.objFile} />
            </S.ResultImg>
            <S.ResultExplainWrapper>
              <S.ContentWrapper>
                <span>체형 특징</span>
                <p>{result.bodyTypeFeature}</p>
              </S.ContentWrapper>
              <S.ContentWrapper>
                <span>코디 주의사항</span>
                <p>{result.bodyTypeCareful}</p>
              </S.ContentWrapper>
            </S.ResultExplainWrapper>
          </S.ResultWrapper>

          <S.ClothWrapper>
            <S.Category>상의</S.Category>
            <S.Slider>
              <ApparelSwiper>
                {result.clothesDto.topClothesItems.map((e, idx) => (
                  <SwiperSlide key={idx}>
                    <ClothComponent cloth={e} />
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
                    <ClothComponent cloth={e} />
                  </SwiperSlide>
                ))}
              </ApparelSwiper>
            </S.Slider>
          </S.ClothWrapper>

          <S.Button
            onClick={() =>
              nav(
                `/${PAGE_PATH.BODY_CHECK}/${PAGE_PATH.STYLEING}/${PAGE_PATH.RESULT}`,
              )
            }
          >
            결과지 제작
          </S.Button>
        </S.ContentResultContainer>
      </S.Container>
    );
  } else {
    return <Error />;
  }
};

export default StylingPage;
