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
  // border: 1px solid #e5e4e2;
  border: 1px solid #F2C94C;
  border-radius: 5px;
  height: 55px;
  min-width: 100%;
  max-width: 100%;
  outline: none;
  margin-bottom: 0.71cm;

  &.small {
    border: 1px solid #e5e4e2;
    border: 1px solid #F2C94C;
    height: 50px;
    margin-bottom: 0.5cm;
  }
`;

const Submit = styled.input`
  min-width: 100%;
  max-width: 100%;
  height: 55px;
  box-sizing: border-box;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  color: #fff;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  background: #F2994A;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #F2C94C, #F2994A);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #F2C94C, #F2994A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  position: absolute;
  bottom: 25.5%;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }

  &.small {
    margin-top: 0.5cm;
    height: 50px;
    position: relative;

    &:hover {
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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
  const isSmallScreen = useMediaQuery({ query: "(max-width: 700px)" });

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
