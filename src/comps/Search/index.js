import React, { useContext, useEffect, useState } from "react";
import { ItemContext } from "../../contexts/ItemContext";
import styled from "styled-components";

import magIcon from "../../../public/image/search.png";
import { useMediaQuery } from "react-responsive";

const Container = styled.div`
  min-width: 100%;
  max-width: 100%;

  & > label {
    color: #fff;
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
  margin-top: 0.53cm;

  & > input {
    min-height: 100%;
    max-height: 100%;
    min-width: 100%;
    max-width: 100%;
    height: 50px;
    box-sizing: border-box;
    border: 4px solid #fff;
    background-color: #b8c8db;
    outline: none;

    &.small {
      box-sizing: border-box;
      border: 2px solid #fff;
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
const Search = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 600px" });

  const { searchItem } = useContext(ItemContext);

  const handleSearch = (e) => {
    searchItem(e);
  };

  return (
    <Container>
      {!isSmallScreen ? <label>SEARCH AN ITEM</label> : null}
      <InputBox>
        <input
          className={isSmallScreen ? "small" : null}
          type="search"
          id="item-search"
          placeholder="SEARCH"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <img src={magIcon} alt="" />
      </InputBox>
    </Container>
  );
};
Search.defaultProps = {
  handleSearch: () => {},
};

export default Search;
