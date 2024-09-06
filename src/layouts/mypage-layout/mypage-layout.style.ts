import styled from "styled-components";
import theme from "@/styles/theme";

const Container = styled.div`
  background-color: ${theme.COLOR.BACKGROUND};
  height: 100dvh;
  ${theme.ALIGN.COLUMN_CENTER};
`;

const OutletContainer = styled.div`
  max-width: 480px;
  width: 100%;
  height: 100%;
`;

export { Container, OutletContainer };
