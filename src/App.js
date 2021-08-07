import React from "react";
import ItemContextProvider from "./contexts/ItemContext";
import styled from "styled-components";

import Intro from "./comps/Intro";
import Block from "./comps/Block";
import NewItemForm from "./comps/NewItemForm";
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

export function App() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 700px" });
  return (
    <Content>
      <ItemContextProvider>
        <Intro />
        {!isSmallScreen ? <Block /> : null}
        <div className={isSmallScreen ? "s-panel" : "l-panel"}>
          <div className={isSmallScreen ? "s-control" : "l-control"}>
            <NewItemForm />
          </div>
          <div className={isSmallScreen ? "s-list" : "l-list"}>
            <ItemList />
          </div>
        </div>
        <Overlay />
      </ItemContextProvider>
    </Content>
  );
}
