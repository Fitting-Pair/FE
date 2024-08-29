import styled from "styled-components";
import theme from "@/styles/theme";

interface IInput {
  $half?: boolean;
}

const Container = styled.div<IInput>`
  ${theme.ALIGN.ROW_SPACE_BETWEEN};
  width: ${(props) => (props.$half ? "240px" : "530px")};
  height: 50px;

  background-color: ${theme.COLOR.WHITE};
  padding: 0px 20px;
  box-shadow: 2px 6px 10px -7px rgba(0, 0, 0, 0.5);
  border-radius: 16px;
  margin: 16px;

  input {
    height: 100%;
    width: 90%;
    font-size: 12px;
    font-family: ${theme.FONT.ROBOTO_MEDIUM};
    letter-spacing: 0.5px;
    border: none;
    outline: none;

    &::placeholder {
      color: ${theme.COLOR.GRAY};
    }
  }

  img {
    margin-right: 10px;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    width: ${(props) => (props.$half ? "110px" : "240px")};
    height: 40px;
    margin: ${(props) => (props.$half ? "16px 10px" : "16px")};

    img {
      display: ${(props) => (props.$half ? "none" : "")};
    }
  }
`;

export { Container };
