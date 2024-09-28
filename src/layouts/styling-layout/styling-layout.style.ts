import { RESPONSIVE_SIZE } from "@/constants";
import theme from "@/styles/theme";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${theme.COLOR.BACKGROUND};
  max-width: ${RESPONSIVE_SIZE.BASE};
  width: 100%;
  min-height: 100dvh;
  margin: 0 auto;
`;

export { Container };
