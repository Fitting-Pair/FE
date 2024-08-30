import styled from "styled-components";

const Container = styled.div`
  position: relative;
  background: linear-gradient(
    200deg,
    #fdb985 11.63%,
    #fdeaad 55.58%,
    #a2c9b4 99.53%
  );
  width: 100vw;
  min-height: 100dvh;
`;

const OutletWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const BackGround = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export { Container, OutletWrapper, BackGround };
