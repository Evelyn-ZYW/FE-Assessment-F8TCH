import React, { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { ItemContext } from "../../contexts/ItemContext";
import styled from "styled-components";

import ItemRow from "../ItemRow";
import ItemHeader from "../ItemHeader";

import crossWhite from '../../../public/image/crossWhite.png';
import crossGrey from '../../../public/image/crossGrey.png';

const Container = styled.div`
  display: flex;
  min-width: 100%;
  max-width: 100%;
  min-height: calc(76px * 6);
  max-height: calc(76px * 8);

  & > :nth-child(2) {
    margin-left: 8.49px;
  }

  &.small {
    & > :nth-child(2) {
      // margin-left: 0;
      box-sizing: border-box;
      // border-left: 2px solid #79818f;
    }
  }
`;

const OuterCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;


  &.small {
    border: none;
  }
`;

const InnerCont = styled.div`
  min-width: 100%;
  max-width: 100%;
  min-height: 90%;
  max-height: 90%;

  & > :nth-child(odd) {
    background-color: #F9F8F8;
    color: #808080;

    & > :nth-child(2) {
      border: 2px solid #808080;
      background-image: url(${crossGrey});
    }
  }

  & > :nth-child(even) {
    background-color: #e5e4e2;
    color: #808080;

    & > :nth-child(2) {
      border: 2px solid #fff;
      background-image: url(${crossWhite});
    }
  }
`;

const ItemList = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 700px)" });

  const { columns, items, results, keyword } = useContext(ItemContext);

  return (
    <Container className={isSmallScreen ? "small" : null}>
      {columns.map((column) => (
        <OuterCont className={isSmallScreen ? "small" : null}>
          <ItemHeader text={column} />
          {keyword ? (
            <InnerCont>
              {results.map((item) => {
                return item.column === column ? (
                  <ItemRow item={item} key={item.id} />
                ) : null;
              })}
            </InnerCont>
          ) : (
            <InnerCont>
              {items.map((item) => {
                return item.column === column ? (
                  <ItemRow item={item} key={item.id} />
                ) : null;
              })}
            </InnerCont>
          )}
        </OuterCont>
      ))}
    </Container>
  );
};

export default ItemList;
