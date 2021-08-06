import React, { useContext } from "react";
import { ItemContext } from "../../contexts/ItemContext";
import styled from "styled-components";

import ItemRow from "../ItemRow";
import ItemHeader from "../ItemHeader";

import { useMediaQuery } from "react-responsive";

const Container = styled.div`
  display: flex;
  min-width: 100%;
  max-width: 100%;
  min-height: calc(76px * 6);
  max-height: calc(76px * 8);

  & > :nth-child(2) {
    margin-left: -8.49px;
  }
  &.small {
    & > :nth-child(2) {
      margin-left: 0;
      box-sizing: border-box;
      border-left: 2px solid #79818f;
  }
`;

const OuterCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  box-sizing: border-box;
  border: 8.49px solid #fff;

  &.small {
    border: none;
  }
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
  const isSmallScreen = useMediaQuery({ query: "(max-width: 600px" });

  const { columns, items } = useContext(ItemContext);

  return (
    <Container className={isSmallScreen ? "small" : null}>
      {columns.map((column) => (
        <OuterCont className={isSmallScreen ? "small" : null}>
          <ItemHeader text={column} />
          {items.length ? (
            <InnerCont>
              {items.map((item) => {
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
