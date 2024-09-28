import * as S from "./home-page.style";
import LOGO from "@/assets/images/Logo.webp";
import START_IMG from "@/assets/images/start_logo.png";
import { PAGE_PATH } from "@/constants";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const nav = useNavigate();

  const handleClick = () => {
    if (window.innerWidth <= 600) {
      // 모바일
      nav(`/${PAGE_PATH.LOGIN}`);
    } else {
      nav(`/${PAGE_PATH.SIGN_UP}`);
    }
  };

  return (
    <S.Container>
      <S.LogoContainer>
        <S.LogoWrapper>
          <img src={LOGO} alt="logo" />
        </S.LogoWrapper>
        <S.Text>
          <p>
            This is a service that analyzes your body shape and <br />
            recommends clothing through CV and AI.
          </p>
        </S.Text>
      </S.LogoContainer>
      <S.NextButton onClick={handleClick}>
        <p>START</p>
        <img src={START_IMG} />
      </S.NextButton>
    </S.Container>
  );
};

export default Homepage;
