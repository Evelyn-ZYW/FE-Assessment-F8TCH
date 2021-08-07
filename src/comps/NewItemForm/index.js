import React, { useContext, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ItemContext } from "../../contexts/ItemContext";
import styled from "styled-components";

import Dropdown from "../Dropdown";
import Search from "../Search";


const Container = styled.form`
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  position: relative;
`;

const Input = styled.input`
  box-sizing: border-box;
  border: 4px solid #fff;
  background-color: #b8c8db;
  height: 73px;
  min-width: 100%;
  max-width: 100%;
  outline: none;
  margin-bottom: 0.71cm;

  &.small {
    border: 2px solid #fff;
    height: 50px;
    margin-bottom: 0.5cm;
  }
`;

const Submit = styled.input`
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
  background: none;
  position: absolute;
  bottom: 25.5%;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    border: 4px solid #b8c8db;
    color: #b8c8db;
  }

  &.small {
    margin-top: 0.5cm;
    border: 3px solid #fff;
    height: 50px;
    position: relative;

    &:hover {
      border: 3px solid #b8c8db;
      color: #b8c8db;
    }
  }
`;
const SearchCont = styled.div`
  min-width: 100%;
  max-width: 100%;
  position: absolute;
  bottom: 0;

  &.small {
    position: relative;
  }
`;

const NewItemForm = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 700px" });

  const { addItem, searchItem } = useContext(ItemContext);

  const [desc, setDesc] = useState("");
  const [column, setColumn] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(desc, column);
    setDesc("");
    setColumn("");
  };

  return (
    <Container
      className={isSmallScreen ? "small" : null}
      onSubmit={handleSubmit}
    >
      <Input
        className={isSmallScreen ? "small" : null}
        type="text"
        placeholder="ENTER ITEM"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        required
      />
      <Dropdown
        value={column}
        text={column ? column : "CHOOSE COLUMN"}
        onOption={(col)=>setColumn(col)}
      />
      <Submit
        className={isSmallScreen ? "small" : null}
        type="submit"
        placeholder="ADD ITEM"
        value="ADD ITEM"
      />
      <SearchCont className={isSmallScreen ? "small" : null}>
        <Search onSearchItem={(e) => searchItem(e.target.value)} />
      </SearchCont>
    </Container>
  );
};

export default NewItemForm;
