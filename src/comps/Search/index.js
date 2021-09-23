import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import magIcon from "../../../public/image/Search2.png";

const Container = styled.div`
  min-width: 100%;
  max-width: 100%;

  & > label {
    color: #555555;
  }
`;
const InputBox = styled.div`
  min-width: 100%;
  max-width: 100%;
  position: relative;
  color: #fff;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  & > input {
    min-height: 100%;
    max-height: 100%;
    min-width: 100%;
    max-width: 100%;
    height: 50px;
    box-sizing: border-box;
    // border: 1px solid #808080;
    // border: 1px solid #e5e4e2;
    border: 1px solid #F2C94C;

    border-radius: 5px;
    // background-color: #e5e4e2;
    outline: none;

    &.small {
      box-sizing: border-box;
      border-radius: 5px;
      border: none;
    }
  }

  & > img {
    min-width: 20px;
    max-width: 20px;
    object-fit: contain;
    position: absolute;
    right: 10px;
  }
`;
const Search = ({ onSearchItem }) => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 700px)" });

  return (
    <Container>
      {!isSmallScreen ? <label>SEARCH TEAM MEMBER</label> : null}
      <InputBox>
        <input
          className={isSmallScreen ? "small" : null}
          type="search"
          id="item-search"
          placeholder="SEARCH"
          onChange={onSearchItem}
        />
        <img src={magIcon} alt="" />
      </InputBox>
    </Container>
  );
};

export default Search;
