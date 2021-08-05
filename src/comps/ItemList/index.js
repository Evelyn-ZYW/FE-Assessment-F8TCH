import React, { useContext, useState } from "react";
import { ItemContext } from "../../contexts/ItemContext";
import styled from "styled-components";

import ItemRow from "../ItemRow";
import ItemHeader from "../ItemHeader";

// import crossWhite from "../../../public/image/crossWhite.png";
// import crossGrey from "../../../public/image/crossGrey.png";

// import "../../../public/image/crossWhite.png";
// import "../../../public/image/crossGrey.png";

const Container = styled.div`
  display: flex;
  min-width: 100%;
  max-width: 100%;
  min-height: calc(76px * 6);
  max-height: calc(76px * 8);

  & > :nth-child(2) {
    margin-left: -8.49px;
  }
`;
const OuterCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  box-sizing: border-box;
  border: 8.49px solid #fff;
`;
const InnerCont = styled.div`
  min-width: 100%;
  max-width: 100%;

  & > :nth-child(odd) {
    background-color: #ebebeb;
    color: #79818f;

    & > :nth-child(2) {
      border: 3px solid #79818f;
      background-image: url("../../../public/image/crossGrey.png");
    }
  }

  & > :nth-child(even) {
    background-color: #b6b6b8;
    color: #fff;

    & > :nth-child(2) {
      border: 3px solid #fff;
      background-image: url("../../../public/image/crossWhite.png");
    }
  }
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
              {items.map((item, index) => {
                return item.column === column ? (
                  <ItemRow item={item} key={item.id} />
                ) : null;
              })}
            </InnerCont>
          ) : null}
        </OuterCont>
      ))}
    </Container>
  );
};

export default ItemList;
