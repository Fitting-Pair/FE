import styled from "styled-components";
import theme from "@/styles/theme";

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ResultTitle = styled.div`
  font-family: ${theme.FONT.JIMHURIA_REGULAR};
  font-size: 1rem;
  font-weight: 900;
  margin-top: 15px;
  letter-spacing: 0.2px;
  text-align: center;
  span {
    color: #ffc791;
  }
`;

const ResultWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${theme.COLOR.WHITE};
  opacity: 0.95;
`;

const ResultExplainWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ContentWrapper = styled.div`
  height: 50%;
  ${theme.ALIGN.COLUMN_CENTER};
  text-align: center;

  margin: 0 10px;
  font-size: 0.4rem;
  font-family: ${theme.FONT.ROBOTO_MEDIUM};

  span {
    text-align: center;
    margin-bottom: 5px;
  }
`;

const BodyImg = styled.div`
  img {
    height: 90px;
    object-fit: fill;
  }
`;

const ClothWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;

  span {
    ${theme.ALIGN.COLUMN_CENTER};
    font-family: ${theme.FONT.JIMHURIA_REGULAR};
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  section {
    ${theme.ALIGN.ROW_CENTER};
  }

  img {
    ${theme.ALIGN.ROW_CENTER};
    background-color: ${theme.COLOR.WHITE};
    margin: 0px 10px;
    border-radius: 5px;
    box-shadow: 0px 6px 20px -8px rgba(0, 0, 0, 0.5);
    width: 60px;
    height: 60px;
    object-fit: cover;
  }
`;

export {
  BodyImg,
  ClothWrapper,
  ResultExplainWrapper,
  ResultTitle,
  Container,
  ContentWrapper,
  ResultWrapper,
};
