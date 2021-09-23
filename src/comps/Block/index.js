import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-width: 100%;
  max-width: 100%;
  min-height: 55px;
  max-height: 55px;
  background: #00C9FF;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #92FE9D, #00C9FF);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #92FE9D, #00C9FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #fff;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const Block = ({ text, onClick }) => {
  return (
    <Container onClick={onClick}>
      <h5>{text}</h5>
    </Container>
  );
};
Block.defaultProps = {
  text: "ADD AN ITEM",
};

export default Block;
