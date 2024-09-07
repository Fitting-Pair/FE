import styled from "styled-components";
import theme from "@/styles/theme";

const Container = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: ${theme.COLOR.BACKGROUND};
`;

const ResultTitle = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  font-family: ${theme.FONT.JIMHURIA_REGULAR};
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.2px;
  padding-left: 10px;

  span {
    color: ${theme.COLOR.ORANGE};
  }
`;

const ResultWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 90%;
`;

const ResultExplainWrapper = styled.div`
  width: 100%;
  ${theme.ALIGN.COLUMN_CENTER};
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding: 10px 10px;
  background-color: ${theme.COLOR.WHITE};
  border-radius: 10px;
  margin-top: 10px;
  font-size: 0.4rem;
  font-family: ${theme.FONT.ROBOTO_MEDIUM};

  span {
    font-weight: 600;
  }

  p {
    margin-top: 5px;
  }
`;

const BodyImg = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  img {
    height: 90px;
    object-fit: contain;
  }
`;

const ClothWrapper = styled.div`
  width: 50%;
  margin-top: 10px;
  ${theme.ALIGN.ROW_CENTER};

  section {
    ${theme.ALIGN.ROW_CENTER};

    img {
      ${theme.ALIGN.ROW_CENTER};
      background-color: ${theme.COLOR.WHITE};
      margin: 0px 10px;
      border-radius: 5px;
      width: 40px;
      height: 40px;
      object-fit: cover;
    }
  }
`;

const UserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${theme.COLOR.WHITE};
  border-radius: 10px;
  width: 100%;
  height: 130px;
  padding: 0 10px;
`;

const FooterWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 5px;

  img {
    width: 80px;
    object-fit: contain;
  }
`;

const UserBody = styled.div``;

const BodySizeWrapper = styled.div`
  div {
    font-size: 8px;
  }
  li {
    font-size: 6px;
  }
  margin-top: 10px;
  margin-left: 10px;
`;

export {
  BodyImg,
  ClothWrapper,
  ResultExplainWrapper,
  ResultTitle,
  Container,
  ContentWrapper,
  ResultWrapper,
  UserWrapper,
  FooterWrapper,
  UserBody,
  BodySizeWrapper,
};
