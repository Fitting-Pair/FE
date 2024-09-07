import theme from "@/styles/theme";
import styled from "styled-components";

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

const SEXBox = styled.div`
  ${theme.ALIGN.ROW_SPACE_BETWEEN};
  width: 95%;
  margin: 10px 0;
  button {
    width: 100%;
    background-color: ${theme.COLOR.WHITE};
    border: none;
    height: 44px;
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
`;

const InfoWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 98%;
`;

const BlackLogo = styled.img`
  position: absolute;
  bottom: 0;
`;

export { Container, SEXBox, BlackLogo, InfoWrapper };
