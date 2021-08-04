import React, { useState } from "react";
import styled from "styled-components";

import arrow from "../../../public/image/arrow.png";

const Outer = styled.div`
  min-width: 100%;
  max-width: 100%;
  position: relative;
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
  cursor: pointer;

  & > img {
    min-width: 15px;
    max-width: 15px;
    object-fit: contain;
    margin-right: 10px;
  }
`;
const Drop = styled.div`
  margin-top: 5px;
  min-width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  border: 4px solid #fff;
  background-color: #b8c8db;
  position: absolute;

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

  &:hover {
    background-color: #8fffee;
    cursor: pointer;
  }
`;

const Dropdown = ({ onColumn }) => {
  const [expand, setExpand] = useState(false);

  const toggleDropdown = () => {
    setExpand(!expand);
  };

  //making an array of existing columns - to be mapped to the dropdown menu
  const columnName = ["COLUMN 1", "COLUMN 2"];

  return (
    <Outer>
      <Container onClick={toggleDropdown}>
        <span>CHOOSE COLUMN</span>
        <img src={arrow} alt="" />
      </Container>
      {expand && (
        <Drop onMouseLeave={() => setExpand(false)}>
          {columnName.map((col, index) => (
            <div
              key={index}
              onClick={() => {
                onColumn(col);
                toggleDropdown();
              }}
            >
              <Option>{col}</Option>
            </div>
          ))}
        </Drop>
      )}
    </Outer>
  );
};
Dropdown.defaultProps = {
  onColumn: () => {},
};
export default Dropdown;
