import React from "react";
import styled from "styled-components";

const Container = styled.input`
  box-sizing: border-box;
  border: 4px solid #fff;
  background-color: #b8c8db;
  height: 73px;
  min-width: 100%;
  max-width: 100%;
  outline: none;
`;
const Input = () => {
  return <Container type="text" id="item" placeholder="ENTER ITEM" required></Container>;
};

export default Input;
