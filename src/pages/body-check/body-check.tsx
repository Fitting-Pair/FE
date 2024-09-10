import * as S from "./body-check.style";

import { Icon, WebcamComponent } from "@/components";

const BodyCheckPage = () => {
  return (
    <S.Container>
      <Icon blackNum={1} />
      <S.ContentContainer>
        <WebcamComponent />
      </S.ContentContainer>
    </S.Container>
  );
};

export default BodyCheckPage;
