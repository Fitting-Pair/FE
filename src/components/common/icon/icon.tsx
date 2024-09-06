import * as S from "./icon.style";
import checkImg from "@/assets/images/check.png";
import checkWhiteImg from "@/assets/images/check-white.png";
import clothImg from "@/assets/images/cloth.png";
import clothWhiteImg from "@/assets/images/cloth-white.png";
import penBlackImg from "@/assets/images/pen-black.png";
import penImg from "@/assets/images/pen.png";

const Icon = ({ blackNum }: { blackNum: number }) => {
  return (
    <S.Container>
      <S.Icon className="check" $blackNum={blackNum}>
        <S.Img src={blackNum !== 1 ? penBlackImg : penImg} />
        체형 분석
      </S.Icon>
      <S.Icon className="style" $blackNum={blackNum}>
        <S.Img src={blackNum !== 2 ? clothImg : clothWhiteImg} />
        스타일링
      </S.Icon>
      <S.Icon className="result" $blackNum={blackNum}>
        <S.Img src={blackNum !== 3 ? checkImg : checkWhiteImg} />
        결과 분석
      </S.Icon>
    </S.Container>
  );
};

export default Icon;
