import React, { useContext } from "react";
import { ItemContext } from "../../contexts/ItemContext";
import styled from "styled-components";

import ItemRow from "../ItemRow";
import ItemHeader from "../ItemHeader";

const Container = styled.div`
  border: 2px solid red;
  display: flex;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
`;
const OuterCont = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  align-items: center;
  flex: 1;

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
const InnerCont = styled.div`
  min-width: 100%;
  max-width: 100%;
`;

const ItemList = () => {
  const { columns, items } = useContext(ItemContext);

  return (
    <Container>
      {columns.map((column) => (
        <OuterCont>
          <ItemHeader text={column} />
          {items.length ? (
            <InnerCont>
              {items.map((item) => {
                return <ItemRow item={item} key={item.id} />;
              })}
            </InnerCont>
          ) : null}
        </OuterCont>
      ))}
    </Container>
  );
};

export default ItemList;
