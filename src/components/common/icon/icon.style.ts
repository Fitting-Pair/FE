import styled from "styled-components";
import theme from "@/styles/theme";

interface IIconProps {
  $blackNum?: number;
}

const Container = styled.div`
  display: flex;
  font-size: 13px;
  margin: 20px 5px 20px 5px;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    display: none;
  }
`;

const Icon = styled.div<IIconProps>`
  ${theme.ALIGN.ROW_CENTER};
  width: 100px;
  height: 33px;
  background-color: white;
  border-radius: 20px;
  padding: 10px;
  margin: 6px;
  font-family: ${theme.FONT.ROBOTO_MEDIUM};
  font-weight: 600;

  @media ${theme.WINDOW_SIZE.IPAD_PRO} {
    font-size: 17px;
    width: 135px;
    height: 43px;
    border-radius: 50px;
  }

  &.check {
    width: 130px;
    color: ${(props) => (props.$blackNum === 1 ? "white" : "black")};
    background-color: ${(props) => (props.$blackNum === 1 ? "black" : "white")};

    @media ${theme.WINDOW_SIZE.IPAD_PRO} {
      width: 165px;
    }
  }

  &.style {
    color: ${(props) => (props.$blackNum === 2 ? "white" : "black")};
    background-color: ${(props) => (props.$blackNum === 2 ? "black" : "white")};
  }

  &.result {
    color: ${(props) => (props.$blackNum === 3 ? "white" : "black")};
    background-color: ${(props) => (props.$blackNum === 3 ? "black" : "white")};
  }
`;

const Img = styled.img`
  margin-right: 10px;
  width: 13%;
`;

export { Container, Icon, Img };
