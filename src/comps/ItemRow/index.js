import React, { useContext } from "react";
import { ItemContext } from "../../contexts/ItemContext";
import styled from "styled-components";

import crossWhite from "../../../public/image/crossWhite.png";
import crossGrey from "../../../public/image/crossGrey.png";

const Container = styled.div`
  min-width: 100%;
  max-width: 100%;
  height: 65px;
  box-sizing: border-box;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#ebebeb")};
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > img {
    min-width: 15px;
    max-width: 15px;
    border: 3px solid #79818f;
    border-radius: 9.5px;
    padding: 5px;
    object-fit: contain;
    margin-right: 10px;
    cursor: pointer;
  }
`;
const ItemRow = ({ item }) => {
  const { removeItem } = useContext(ItemContext);
  return (
    <Container>
      <span>{item.desc}</span>
      <img src={crossGrey} alt="" onClick={() => removeItem(item.id)} />
    </Container>
  );
};
ItemRow.defaultProps = {
  text: "ITEM",
};

export default ItemRow;
