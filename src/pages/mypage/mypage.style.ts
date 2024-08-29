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
  background: linear-gradient(
    200deg,
    #fdb985 11.63%,
    #fdeaad 55.58%,
    #a2c9b4 99.53%
  );
`;

const MyResultTitle = styled.div`
  padding-top: 90px;
  ${theme.ALIGN.COLUMN_CENTER};
  font-family: ${theme.FONT.JIMHURIA_REGULAR};
  font-size: 128px;
  text-align: center;
  line-height: 70px;
`;

const BlackLogo = styled.img`
  position: absolute;
  bottom: 0;
`;

const PreviousResultWrapper = styled.div<{ $one: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50%;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    ${theme.ALIGN.COLUMN_CENTER};
    width: 60%;
  }

  .swiper-slide-next {
    transform: ${({ $one }) => ($one ? "scale(1.05)" : "scale(0.85)")};
  }

  .swiper-slide-prev {
    transform: scale(0.85);
  }
`;

const PreviousData = styled.div`
  width: 95%;
  height: 330px;
  margin-top: 10px;
`;

const MyPageDate = styled.div`
  width: 95%;
  margin-top: 10px;
  font-family: ${theme.FONT.ROBOTO_MEDIUM};
  color: ${theme.COLOR.WHITE};
`;

const LoadingBox = styled.div`
  width: 100%;
  height: 50%;
  ${theme.ALIGN.ROW_CENTER};
`;

export {
  Container,
  PreviousData,
  MyResultTitle,
  MyPageDate,
  BlackLogo,
  PreviousResultWrapper,
  LoadingBox,
};
