import styled from "styled-components";
import theme from "@/styles/theme";

const Container = styled.div`
  ${theme.ALIGN.ROW_SPACE_BETWEEN};
  width: 100%;
  height: 50px;
  gap: 10px;

  background-color: ${theme.COLOR.WHITE};
  padding: 0px 20px;
  box-shadow: 2px 6px 10px -7px rgba(0, 0, 0, 0.5);
  border-radius: 16px;

  input {
    height: 100%;
    width: 100%;
    font-size: 12px;
    font-family: ${theme.FONT.ROBOTO_MEDIUM};
    letter-spacing: 0.5px;
    border: none;
    outline: none;

    &::placeholder {
      color: ${theme.COLOR.GRAY};
    }
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: 100%;
    height: 40px;
    padding: 0px 10px;

    img {
      width: 20px;
      height: 20px;
    }
  }
`;

export { Container };
