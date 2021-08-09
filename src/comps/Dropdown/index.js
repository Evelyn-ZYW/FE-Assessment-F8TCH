import React, { useContext, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ItemContext } from "../../contexts/ItemContext";
import styled from "styled-components";

import arrow from "../../../public/image/Arrow.png";

const Outer = styled.div`
  min-width: 100%;
  max-width: 100%;
  position: relative;
`;
const Container = styled.div`
  min-width: 100%;
  max-width: 100%;
  height: 73px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border: 4px solid #fff;
  background-color: #b8c8db;
  color: #fff;
  cursor: pointer;

  & > img {
    min-width: 15px;
    max-width: 15px;
    object-fit: contain;
    margin-right: 10px;
  }

  &.small {
    border: 2px solid #fff;
    height: 50px;
  }
`;

const Menu = styled.div`
  margin-top: 5px;
  min-width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  border: 2px solid #fff;
  background-color: #b8c8db;
  position: absolute;
  z-index: 2;

  & > div {
    color: #000;
    height: 50px;
    display: flex;
    align-items: center;
  }
`;
const Option = styled.span`
  color: #fff;
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
    color: #79818f;
    cursor: pointer;
  }
  &.className {
    z-index: 1;
  }
`;

const Dropdown = ({ text, onOption, value }) => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 700px)" });

  const { columns } = useContext(ItemContext);
  const [expand, setExpand] = useState(false);

  const toggleDropdown = () => {
    setExpand(!expand);
  };

  return (
    <Outer>
      <Container
        className={isSmallScreen ? "small" : null}
        onClick={toggleDropdown}
      >
        <span>{text}</span>
        <img src={arrow} alt="" />
      </Container>

      {expand && (
        <Menu onMouseLeave={() => setExpand(false)}>
          {columns.map((col, index) => (
            <div>
              <Option
                className={isSmallScreen ? "small" : null}
                key={index}
                value={value}
                onClick={() => {
                  onOption(col);
                  toggleDropdown();
                }}
              >
                {col}
              </Option>
            </div>
          ))}
        </Menu>
      )}
    </Outer>
  );
};
Dropdown.defaultProps = {
  onColumn: () => {},
  onOption: () => {},
};
export default Dropdown;
