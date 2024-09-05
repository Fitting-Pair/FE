import theme from "@/styles/theme";
import styled from "styled-components";

const Container = styled.div`
  width: 95%;

  label {
    font-weight: 700;
    margin-left: 3px;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;

  width: 100%;

  background-color: ${theme.COLOR.WHITE};

  p {
    color: #807e7d;
    font-weight: 700;
  }
`;

export { Container, Box };
