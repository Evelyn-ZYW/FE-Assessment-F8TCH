import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 2rem;
`;
const Title = styled.h2`
  color: #549CB6;
  word-break: break-all;
`;

const Desc = styled.div`
  color: #555555;
  // min-width: 65%;
  // max-width: 65%;
  min-width: 100%;
  max-width: 100%;

  &.small {
    min-width: 100%;
    max-width: 100%;
  }
`;
const Intro = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 700px)" });
  return (
    <Container>
      <Title></Title>
      <Desc className={isSmallScreen ? "small" : null}>
        <h5>Step 1: enter a person's name.</h5>
        <h5>Step 2: choose a team.</h5>
        <h5>Step 3: click "ADD" to display outcome on the list.</h5>
        <br/>
        <h5>Note: you can search for a person from the search field.</h5>
      </Desc>
    </Container>
  );
};
export default Intro;
