import Webcam from "@/components/webcam/webcam";
import * as S from "./body-check.style";

import { Icon } from "@/components";
// import Webcam from "../../components/Webcam/Webcam";

const BodyCheckPage = () => {
  return (
    <S.Container>
      <Icon blackNum={1} />
      <S.ContentContainer>
        <Webcam />
        <S.TipWrapper>
          <S.TipIcon>{`Tip ) 아래 순서를 따라해주세요.`}</S.TipIcon>
          <S.ContentWrapper>
            <span>촬영 버튼을 누르고 5초 후에 촬영됩니다.</span>
            <li>1. 정면을 바라보고 사진을 찍어주세요.</li>
            <li>2. 옆구리가 붙지 않도록 팔을 벌려주세요.</li>
            <li>3. 어깨넓이 만큼 다리를 벌려주세요.</li>
            <li>4. 충분히 거리를 두고 발끝까지 나오게 찍어주세요.</li>
          </S.ContentWrapper>
        </S.TipWrapper>
      </S.ContentContainer>
    </S.Container>
  );
};

export default BodyCheckPage;
