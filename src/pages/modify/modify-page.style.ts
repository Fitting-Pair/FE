import theme from "@/styles/theme";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-height: 800px;
  height: 100%;
  background: linear-gradient(
    200deg,
    #fdb985 11.63%,
    #fdeaad 55.58%,
    #a2c9b4 99.53%
  );

  h1 {
    ${theme.ALIGN.COLUMN_CENTER};
    font-family: ${theme.FONT.JIMHURIA_REGULAR};
    font-size: 128px;
    text-align: center;
    letter-spacing: 0.2rem;
  }
`;

export { Container };
