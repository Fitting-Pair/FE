import theme from "@/styles/theme";
import styled from "styled-components";

const Container = styled.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.6);

  ${theme.ALIGN.ROW_CENTER};
`;

const ModalWrapper = styled.div`
  position: relative;
  ${theme.ALIGN.COLUMN_CENTER};
  background-color: ${theme.COLOR.BACKGROUND};
  border-radius: 16px;
  filter: drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.25));
  width: 250px;
  height: 280px;
  padding: 20px;
  gap: 5px;
`;

const Text = styled.p`
  text-align: center;
  padding-bottom: 10px;
  color: #6e6c6a;
  opacity: 0.8;
  font-weight: bold;
  font-size: 14px;
`;

const Cancel = styled.button`
  position: absolute;
  top: 15px;
  left: 15px;
  border: none;
  background-color: transparent;
  font-weight: bold;
  cursor: pointer;
`;

const BtnBox = styled.button`
  width: 100%;
  border: none;
  color: ${theme.COLOR.WHITE};
  background-color: #6e6c6a;
  font-weight: bold;
  padding: 10px 5px;
  border-radius: 50px;
  cursor: pointer;
`;

const ImgBox = styled.div`
  ${theme.ALIGN.ROW_CENTER};
  height: 110px;
`;

export { Container, ModalWrapper, Text, Cancel, BtnBox, ImgBox };
