import styled from "styled-components";
import theme from "../../styles/theme";

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};

  @media ${theme.WINDOW_SIZE.MOBILE} {
    position: relative;
    width: 100%;
    overflow-x: hidden;
  }
`;

const ContentWrapper = styled.div`
  width: 325px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 24px;

  margin: 10px 30px;
  font-size: 16px;
  font-family: ${theme.FONT.ROBOTO_MEDIUM};

  span {
    text-align: center;
    margin-bottom: 10px;
  }
`;

const ResultWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 996px;
  height: 1400px;
  border-radius: 24px;
  background-color: white;
  opacity: 0.8;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    height: 50%;
    background-color: transparent;
  }
`;

const ClothWrapper = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 996px;
  margin: 24px 24px;
  border-radius: 24px;

  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  span {
    ${theme.ALIGN.COLUMN_CENTER};
    font-family: ${theme.FONT.JIMHURIA_REGULAR};
    font-size: 82px;
    color: #ffc791;
  }

  div {
    ${theme.ALIGN.COLUMN_CENTER};
    width: 250px;
    height: 250px;
    background-color: white;
    margin: 0px 15px;
    border-radius: 24px;
    box-shadow: 0px 6px 20px -8px rgba(0, 0, 0, 0.5);
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    section {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    div {
      margin: 15px 0px;
    }

    span {
      font-size: 45px;
      margin-top: 0px;
    }
  }
`;

const ResultTitle = styled.div`
  font-family: ${theme.FONT.JIMHURIA_REGULAR};
  font-size: 82px;

  span {
    color: #ffc791;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    font-family: ${theme.FONT.JIMHURIA_REGULAR};
    font-size: 45px;
    margin-top: 0px;
  }
`;

const ResultImg = styled.div`
  img {
    @media ${theme.WINDOW_SIZE.MOBILE} {
      margin: 30px 0px;
      width: 300px;
      height: 300px;
    }
  }
`;

const ResultExplainWrapper = styled.div`
  display: flex;

  @media ${theme.WINDOW_SIZE.MOBILE} {
    flex-direction: column;
  }
`;

const ContentResultContainer = styled.div`
  margin: 20px 0px;
  position: relative;
  display: grid;
  place-items: center;

  @media ${theme.WINDOW_SIZE.MOBILE} {
  }
`;

const Button = styled.div`
  display: grid;
  place-items: center;

  width: 117px;
  height: 40px;
  margin: 10px;
  border: none;
  border-radius: 25px;
  color: white;
  background-color: #7c9c80;
  font-weight: bold;
  font-size: 12px;
  box-shadow: 0px 6px 20px -8px rgba(0, 0, 0, 0.5);

  &:hover {
    cursor: pointer;
  }

  img {
    width: 27%;
  }

  @media ${theme.WINDOW_SIZE.MOBILE} {
    display: none;
  }
`;

const QRImg = styled.div`
  @media ${theme.WINDOW_SIZE.MOBILE} {
    display: none;
  }
`;

export {
  QRImg,
  Button,
  ClothWrapper,
  ResultExplainWrapper,
  ResultImg,
  ResultTitle,
  Container,
  ContentWrapper,
  ContentResultContainer,
  ResultWrapper,
};
