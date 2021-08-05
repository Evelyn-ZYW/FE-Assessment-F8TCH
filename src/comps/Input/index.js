import React, { useState } from "react";
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
const Input = ({onChangeInput, value}) => {
  // const [item, setItem] = useState("");
  return (
    <Container
      type="text"
      id="item"
      value={value}
      placeholder="ENTER ITEM"
      onChange={onChangeInput}
      required
    ></Container>
  );
};

export default Input;
