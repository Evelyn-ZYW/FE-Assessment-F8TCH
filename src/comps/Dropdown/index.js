import React from "react";
import styled from "styled-components";

import Arrow from "../../../public/image/Arrow.png";

const Outer = styled.div`
  min-width: 100%;
  max-width: 100%;
`;
const Container = styled.div`
  box-sizing: border-box;
  border: 4px solid #fff;
  background-color: #b8c8db;
  height: 73px;
  min-width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > img {
    min-width: 15px;
    max-width: 15px;
    object-fit: contain;
    margin-right: 10px;
  }
`;
const Drop = styled.div`
  margin-top: 5px;
  box-sizing: border-box;
  border: 4px solid #fff;
  background-color: #b8c8db;

  & > div {
    color: #000;
    height: 50px;
    display: flex;
    align-items: center;
  }
`;
const Option = styled.p`
  color: #000;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box; 
  padding-left: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #8fffee;
    cursor: pointer;
  }
`;

const Dropdown = () => {
  return (
    <Outer>
      <Container>
        <span>CHOOSE COLUMN</span>
        <img src={Arrow} alt="" />
      </Container>
      <Drop>
        <div>
          <Option className="bolder">COLUMN 1</Option>
        </div>
        <div>
          <Option className="bolder">COLUMN 2</Option>
        </div>
      </Drop>
    </Outer>
  );
};

export default Dropdown;
