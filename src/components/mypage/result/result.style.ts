import theme from "@/styles/theme";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ResultTitle = styled.div`
  font-family: ${theme.FONT.ROBOTO_BOLD};
  font-size: 12px;
  margin-top: 15px;
  letter-spacing: 0.2px;
  padding: 5px;
  ${theme.ALIGN.ROW_CENTER};

  span {
    color: #ffc791;
  }
`;

const ResultWrapper = styled.div`
  overflow: hidden;
  ${theme.ALIGN.COLUMN_CENTER};
  width: 100%;
  height: 100%;
  background-color: ${theme.COLOR.BACKGROUND};
  opacity: 0.95;
`;

const ResultExplainWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const ContentWrapper = styled.div`
  height: 50%;
  ${theme.ALIGN.COLUMN_CENTER};
  text-align: center;

  margin: 0 15px;
  font-size: 0.4rem;
  font-family: ${theme.FONT.ROBOTO_MEDIUM};

  span {
    text-align: center;
    margin-bottom: 5px;
    font-weight: bold;
  }
`;

const BodyImg = styled.div`
  img {
    height: 90px;
    object-fit: cover;
  }
`;

const ClothWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    ${theme.ALIGN.COLUMN_CENTER};
    font-family: ${theme.FONT.JIMHURIA_REGULAR};
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  section {
    ${theme.ALIGN.ROW_CENTER};
    img {
      width: 45px;
      height: 45px;
      object-fit: cover;
      border-radius: 5px;
    }
    margin-bottom: 15px;
  }

  div {
    ${theme.ALIGN.ROW_CENTER};
    background-color: white;
    margin: 0px 10px;
    border-radius: 24px;
    box-shadow: 0px 6px 20px -8px rgba(0, 0, 0, 0.5);
  }
`;

const Wrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  background-color: ${theme.COLOR.WHITE};
  border-radius: 15px;
  width: 90%;
`;

export {
  BodyImg,
  ClothWrapper,
  ResultExplainWrapper,
  ResultTitle,
  Container,
  ContentWrapper,
  ResultWrapper,
  Wrapper,
};
