import styled from "styled-components";
import theme from "@/styles/theme";

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  position: relative;
  width: 100%;
  overflow-x: hidden;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 32px;
  margin-top: 40px;

  span {
    color: ${theme.COLOR.ORANGE};
  }
`;

const ResultImg = styled.img`
  margin: 0px 0px 50px;
  width: 300px;
  height: 300px;
  object-fit: contain;
`;

const ContentWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
`;

const ContentBox = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  font-family: ${theme.FONT.ROBOTO_MEDIUM};
  margin-bottom: 40px;
  line-height: 24px;

  div {
    font-size: 1.2rem;
    margin-bottom: 30px;
    font-weight: bold;
  }

  span {
    padding: 0 30px;
    text-align: center;
    word-break: keep-all;
  }
`;

const SeletedWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  margin-top: 30px;

  h1 {
    font-size: 30px;
    font-family: ${theme.FONT.JIMHURIA_REGULAR};
    letter-spacing: 1.1px;
  }
`;

const ApparelWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  margin-bottom: 20px;

  img {
    margin: 20px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 24px;
    width: 240px;
    height: 240px;
    object-fit: cover;

    &:hover {
      box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.5);
    }
  }
`;

const ResultWrapper = styled.div`
  width: 90%;
  border-radius: 16px;
  margin-top: 80px;
  margin-bottom: 20px;

  ${theme.ALIGN.COLUMN_CENTER};
  background-color: ${theme.COLOR.WHITE};
`;

const LoadingContainer = styled.div`
  width: 100%;
  height: 100dvh;
  ${theme.ALIGN.ROW_CENTER};
`;

export {
  Container,
  Title,
  ResultImg,
  ContentWrapper,
  ContentBox,
  SeletedWrapper,
  ApparelWrapper,
  ResultWrapper,
  LoadingContainer,
};
