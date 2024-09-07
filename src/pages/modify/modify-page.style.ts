import theme from "@/styles/theme";
import styled from "styled-components";

interface BoxProps {
  $male: boolean;
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 900px;
  height: 100%;
  background: linear-gradient(
    200deg,
    #fdb985 11.63%,
    #fdeaad 55.58%,
    #a2c9b4 99.53%
  );

  h1 {
    margin-top: 80px;
    ${theme.ALIGN.COLUMN_CENTER};
    font-family: ${theme.FONT.JIMHURIA_REGULAR};
    font-size: 128px;
    text-align: center;
    letter-spacing: 0.2rem;
  }
`;

const SEXBox = styled.div<BoxProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 95%;
  margin: 10px 0;

  p {
    font-size: 14px;
    font-weight: 700;
    margin-left: 3px;
  }

  svg {
    width: 25px;
    height: 25px;
  }

  hr {
    z-index: 2;
    width: 1px;
    height: 100%;
    background: ${theme.COLOR.GRAY};
    border: 0;
  }

  .male {
    background-color: ${({ $male }) => ($male ? "#42BCFF" : theme.COLOR.WHITE)};
    svg {
      color: ${({ $male }) => ($male ? theme.COLOR.WHITE : "#42BCFF")};
    }
  }

  .female {
    background-color: ${({ $male }) => ($male ? theme.COLOR.WHITE : "#F42121")};
    svg {
      color: ${({ $male }) => (!$male ? theme.COLOR.WHITE : "#F42121")};
    }
  }
`;

const ButtonBox = styled.div`
  ${theme.ALIGN.ROW_SPACE_BETWEEN};

  button {
    width: 100%;
    border: none;
    height: 44px;
  }
`;

const InfoWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 98%;
`;

const BlackLogo = styled.img`
  position: absolute;
  bottom: 0;
`;

export { Container, SEXBox, BlackLogo, InfoWrapper, ButtonBox };
