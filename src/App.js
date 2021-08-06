import React, { useState } from "react";
import ItemContextProvider from "./contexts/ItemContext";
import styled from "styled-components";

import Intro from "./comps/Intro";
import Block from "./comps/Block";
import NewItemForm from "./comps/NewItemForm";
import Search from "./comps/Search";
import ItemList from "./comps/ItemList";
import Overlay from "./comps/Overlay";

import { useMediaQuery } from "react-responsive";

//styled-components
const Content = styled.div`
  margin: 5% 0;
  min-width: 50%;
  max-width: 75%;

  & > div {
    min-width: 100%;
    max-width: 100%;
  }
`;

const Panel = styled.div``;
const Left = styled.div``;
const Right = styled.div``;

export function App() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 600px" });
  return (
    <Content>
      <ItemContextProvider>
        <Intro />
        {!isSmallScreen ? <Block /> : null}
        <Panel className={isSmallScreen ? "s-panel" : "l-panel"}>
          <Left className={isSmallScreen ? "s-left" : "l-left"}>
            <NewItemForm />
            <Search />
          </Left>
          <Right className={isSmallScreen ? "s-right" : "l-right"}>
            <ItemList />
          </Right>
        </Panel>
        <Overlay />
      </ItemContextProvider>
    </Content>
  );
}
