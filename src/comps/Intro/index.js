import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 2rem;
`;
const Title = styled.h2`
  color: #fff;
  word-break: break-all;
`;

const Desc = styled.h5`
  color: #8fffee;
  min-width: 65%;
  max-width: 65%;

  &.small {
    min-width: 100%;
    max-width: 100%;
  }
`;
const Intro = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 700px)" });
  return (
    <Container>
      <Title>Marvelous!</Title>
      <Desc className={isSmallScreen ? "small" : null}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since.
      </Desc>
    </Container>
  );
};
export default Intro;
