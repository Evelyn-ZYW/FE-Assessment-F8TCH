import React from "react";
import styled from "styled-components";

const Container = styled.div`
min-width: 100%;
max-width: 100%;
min-height: 55px;
max-height: 55px;
background: linear-gradient(0deg, rgba(73,84,104,1) 0%, rgba(184,200,219,1) 100%);
color: #FFF;
display: flex;
text-align: center;
align-items: center;
justify-content: center;
`;
const ItemHeader = ({text}) => {
  return (
    <Container>
      <h6>{text}</h6>
    </Container>
  );
};

export default ItemHeader;
