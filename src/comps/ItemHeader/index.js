import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-width: 100%;
  max-width: 100%;
  min-height: 55px;
  max-height: 55px;
  background: #FFF4DA;
  // border-style: solid;
  // border-width: 3px;
  // border-image: linear-gradient(45deg, #92FE9D, #00C9FF) 1;
  box-sizing: border-box;
  border-radius: 5px 5px 0 0;
  color: #808080;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
const ItemHeader = ({ text }) => {
  return (
    <Container>
      <h6>{text}</h6>
    </Container>
  );
};

export default ItemHeader;
