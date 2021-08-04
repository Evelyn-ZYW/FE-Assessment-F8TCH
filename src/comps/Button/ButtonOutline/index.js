import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-width: 100%;
  max-width: 100%;
  height: 73px;
  box-sizing: border-box;
  border: 4px solid #fff;
  color: #fff;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
const ButtonOutline = ({text}) => {
  return (
    <Container>
      <h6>{text}</h6>
    </Container>
  );
};
ButtonOutline.defaultProps = {
  text: "ADD ITEM"
}
export default ButtonOutline;
