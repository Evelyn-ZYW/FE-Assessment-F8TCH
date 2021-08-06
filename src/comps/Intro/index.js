import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 2rem;
`;
const Title = styled.h1`
  color: #fff;
  word-break: break-all;
`;

const Desc = styled.h5`
  color: #8fffee;
`;
const Intro = () => {
  return (
    <Container>
      <Title>Marvelous!</Title>
      <Desc>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since.
      </Desc>
    </Container>
  );
};
export default Intro;
