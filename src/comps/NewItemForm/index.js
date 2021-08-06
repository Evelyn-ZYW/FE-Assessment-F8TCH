import React, { useContext, useState } from "react";
import { ItemContext } from "../../contexts/ItemContext";
import styled from "styled-components";
import Dropdown from "../Dropdown";

import { useMediaQuery } from "react-responsive";

const Container = styled.form`
  min-width: 100%;
  max-width: 100%;
  min-height: 75%;
  max-height: 75%;
  position: relative;
`;
const ContainerS = styled.form`
  min-width: 100%;
  max-width: 100%;
  position: relative;
`;
const Type = styled.input`
  box-sizing: border-box;
  border: 4px solid #fff;
  background-color: #b8c8db;
  height: 73px;
  min-width: 100%;
  max-width: 100%;
  outline: none;
  margin-bottom: 0.71cm;
`;
const TypeS = styled.input`
  box-sizing: border-box;
  border: 2px solid #fff;
  background-color: #b8c8db;
  height: 50px;
  min-width: 100%;
  max-width: 100%;
  outline: none;
  margin-bottom: 0.5cm;
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
  bottom: 0;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    border: 4px solid #b8c8db;
    color: #b8c8db;
  }
`;
const SubmitS = styled.input`
  min-width: 100%;
  max-width: 100%;
  height: 50px;
  box-sizing: border-box;
  border: 3px solid #fff;
  color: #fff;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  background: none;
  margin-top: 0.5cm;

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    border: 4px solid #b8c8db;
    color: #b8c8db;
  }
`;
const NewItemForm = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 600px" });

  const { addItem } = useContext(ItemContext);
  const { showModal } = useContext(ItemContext);

  const [desc, setDesc] = useState("");
  const [column, setColumn] = useState("");

  const handleOption = (col) => {
    setColumn(col);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(desc, column);
    // showModal();
    setDesc("");
    setColumn("");
  };

  return (
    <>
      {isSmallScreen ? (
        <ContainerS onSubmit={handleSubmit}>
          <TypeS
            type="text"
            placeholder="ENTER ITEM"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
          <Dropdown
            value={column}
            text={column ? column : "CHOOSE COLUMN"}
            onOption={handleOption}
          />
          <SubmitS type="submit" placeholder="ADD ITEM" value="ADD ITEM" />
        </ContainerS>
      ) : (
        <Container onSubmit={handleSubmit}>
          <Type
            type="text"
            placeholder="ENTER ITEM"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
          <Dropdown
            value={column}
            text={column ? column : "CHOOSE COLUMN"}
            onOption={handleOption}
          />
          <Submit type="submit" placeholder="ADD ITEM" value="ADD ITEM" />
        </Container>
      )}
    </>
  );
};

export default NewItemForm;
