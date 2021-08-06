import React, { useContext } from "react";
import { ItemContext } from "../../contexts/ItemContext";
import styled from "styled-components";

const Container = styled.div`
  min-width: 100%;
  max-width: 100%;
  height: 65px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > img {
    min-width: 15px;
    max-width: 15px;
    border: ${(props) => (props.bdcolor ? props.bdcolor : "3px solid #79818f")};
    border-radius: 9.5px;
    padding: 5px;
    object-fit: contain;
    margin-right: 10px;
    cursor: pointer;
  }
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
