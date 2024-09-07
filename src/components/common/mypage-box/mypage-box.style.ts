import theme from "@/styles/theme";
import styled from "styled-components";

const Container = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin: 15px 0;

  label {
    font-size: 14px;
    font-weight: 700;
    margin-left: 3px;
  }

  p {
    color: ${theme.COLOR.WHITE};
    font-weight: 600;
    margin-left: 3px;
    font-size: 12px;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

  width: 100%;

  background-color: ${theme.COLOR.WHITE};

  p {
    color: #807e7d;
    font-weight: 700;
  }
`;

export { Container, Box };
