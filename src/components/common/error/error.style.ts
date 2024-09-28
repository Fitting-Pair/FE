import styled, { keyframes } from "styled-components";
import theme from "@/styles/theme";

const alert = keyframes`
   0% {
      opacity: 1;
   }
   50% {
      opacity: 0.2;
   }
   100% {
      opacity: 1;
   }

`;

const Container = styled.div`
  width: 100%;
  height: 100dvh;
  ${theme.ALIGN.COLUMN_CENTER};

  svg {
    width: 50px;
    height: 50px;
    color: ${theme.COLOR.RED};
    animation: ${alert} 1.5s 0s infinite linear;
    margin-bottom: 30px;
  }

  p {
    margin-top: 15px;
    cursor: pointer;
    text-decoration: underline;
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    svg {
      width: 30px;
      height: 30px;
    }

    h2 {
      font-size: 20px;
    }

    p {
      margin-top: 10px;
      font-size: 13px;
    }
  }
`;

export { Container };
