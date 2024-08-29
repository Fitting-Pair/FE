import styled from "styled-components";
import theme from "@/styles/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 800px;
  height: 100%;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 100%;
  margin-top: 100px;

  button {
    background-color: black;
    color: ${theme.COLOR.WHITE};
    border-radius: 13px;
    min-width: 250px;
    width: 90%;
    height: 55px;
    font-family: ${theme.FONT.ROBOTO_BOLD};
    font-size: 20px;
    cursor: pointer;
  }
`;

const Image = styled.img`
  ${theme.ALIGN.COLUMN_CENTER};
  min-width: 250px;
  width: 90%;
  min-height: 450px;
  height: 50%;
  margin-bottom: 25px;
  background-color: ${theme.COLOR.WHITE};
  border-radius: 24px;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.5);
  object-fit: cover;
`;

const Logo = styled.div`
  position: absolute;
  bottom: -5px;
`;

export { Container, ContentWrapper, Image, Logo };
