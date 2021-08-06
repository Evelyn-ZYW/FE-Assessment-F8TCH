import React, { useContext, useState } from "react";
import { ItemContext } from "../../contexts/ItemContext";
import styled from "styled-components";
import Dropdown from "../Dropdown";

const Container = styled.form`
  min-width: 100%;
  max-width: 100%;
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
  margin-top: 40%;
  margin-bottom: 10%;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    border: 4px solid #b8c8db;
    color: #b8c8db;
  }
`;
const NewItemForm = () => {
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
  );
};

export default NewItemForm;
