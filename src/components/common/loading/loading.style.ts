import styled, { keyframes } from "styled-components";
import theme from "@/styles/theme";
import { RESPONSIVE_SIZE } from "@/constants";

const spinning = keyframes`
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);;
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  display: grid;
  place-items: center;
  position: relative;

  max-width: ${RESPONSIVE_SIZE.BASE};
  width: 100%;
  height: 100dvh;

  img {
    position: absolute;
    animation: ${spinning} 900ms 0s infinite linear normal;

    @media ${theme.WINDOW_SIZE.IPAD_PRO} {
      width: 11%;
    }

    @media ${theme.WINDOW_SIZE.MOBILE} {
      width: 13%;
    }
  }
`;

const LoadingText = styled.div`
  display: grid;
  place-items: center;
  width: 130px;
  height: 45px;

  background-color: #fff;
  border-radius: 100px;

  font-weight: bold;
  font-size: 15px;
  letter-spacing: 0.1px;

  z-index: 1;

  @media ${theme.WINDOW_SIZE.IPAD_PRO} {
    width: 140px;
    height: 50px;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-size: 10px;
    width: 80px;
    height: 26px;
  }
`;

export { Container, LoadingText };
