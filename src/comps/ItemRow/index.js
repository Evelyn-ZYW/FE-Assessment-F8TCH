import React, { useContext } from "react";
import { ItemContext } from "../../contexts/ItemContext";
import styled from "styled-components";

const Container = styled.div`
  min-width: 100%;
  max-width: 100%;
  height: 55px;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ImgCont = styled.div`
  min-width: 10px;
  max-width: 10px;
  min-height: 10px;
  max-height: 10px;
  margin-right: 10px;
  padding: 5px;
  background-size: contain;
  background-origin: content-box;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 8px;
  cursor: pointer;
`;
const ItemRow = ({ item }) => {
  
  const { removeItem } = useContext(ItemContext);

  return (
    <Container>
      <span>{item.desc}</span>
      <ImgCont onClick={() => removeItem(item.id)}></ImgCont>
    </Container>
  );
};
ItemRow.defaultProps = {
  text: "ITEM",
};

export default ItemRow;
