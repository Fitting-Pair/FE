import styled from "styled-components";
import theme from "@/styles/theme";

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  min-width: 660px;
`;

const IconWrapper = styled.div`
  display: flex;
  font-size: 13px;
  margin: 20px 5px 24px 5px;
`;

const Icon = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  width: 100px;
  height: 33px;
  background-color: ${theme.COLOR.WHITE};
  border-radius: 20px;

  padding: 10px;
  margin: 6px;

  font-family: ${theme.FONT.ROBOTO_MEDIUM};

  img {
    margin-right: 10px;
    width: 13%;
  }
`;

const IconBlack = styled(Icon)`
  width: 130px;

  color: ${theme.COLOR.WHITE};
  background-color: ${theme.COLOR.BLACK};
`;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  border-radius: 24px;
  background-color: ${theme.COLOR.WHITE};
  font-family: ${theme.FONT.ROBOTO_MEDIUM};

  padding: 25px 60px;
  margin-top: 20px;

  img {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  span {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 20px;
  }

  p {
    word-break: keep-all;
  }
`;

const ResultBodyType = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px 60px 10px;
  width: 92%;
  border-radius: 24px;
  background-color: ${theme.COLOR.WHITE};
  gap: 10px;

  .rectangle {
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;

const ClothWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 92%;
  height: 342px;
  margin: 0px 25px 25px;
  border-radius: 24px;
`;

const Category = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 90px;
  height: 35px;
  text-align: center;
  margin: 0px 10px 30px 20px;
  border: none;
  border-radius: 25px;
  color: ${theme.COLOR.WHITE};
  background-color: ${theme.COLOR.GREEN};
  font-weight: bold;
  font-size: 12px;
`;

const ResultTitle = styled.div`
  font-size: 2.4rem;
  font-weight: 900;
  word-break: keep-all;

  span {
    margin-right: 2px;
    color: ${theme.COLOR.ORANGE};
  }
`;

const ResultImg = styled.div`
  img {
    width: 330px;
    object-fit: contain;
  }
`;

const ResultExplainWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  width: 92%;
  margin-bottom: 25px;
`;

const ContentResultContainer = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  margin-bottom: 20px;
  margin-top: 10px;
  position: relative;
  width: 98%;
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
    color: white;
    transition: 0.5s;
  }

  img {
    width: 27%;
  }
`;

const Slider = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  width: 100%;
  padding: 0 10px;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    ${theme.ALIGN.COLUMN_CENTER};
    width: 250px;
    margin: 0 10px;
  }
`;

const BodySizeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 5px;
  padding-bottom: 40px;

  h5 {
    font-size: 19px;
  }

  li {
    display: flex;
    gap: 4px;
    font-size: 17px;
  }
`;

const UserBody = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
`;

export {
  Slider,
  Category,
  Button,
  ClothWrapper,
  ResultExplainWrapper,
  ResultImg,
  ResultTitle,
  Container,
  IconWrapper,
  Icon,
  IconBlack,
  ContentWrapper,
  ContentResultContainer,
  ResultBodyType,
  BodySizeWrapper,
  UserBody,
};
