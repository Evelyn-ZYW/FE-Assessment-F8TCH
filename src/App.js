import React, { useState } from "react";
import ItemContextProvider from "./contexts/ItemContext";
import styled from "styled-components";

import Intro from "./comps/Intro";
import ButtonGradient from "./comps/Button/ButtonGradient";
import NewItemForm from "./comps/NewItemForm";
import Search from "./comps/Search";
import ItemList from "./comps/ItemList";
import Overlay from "./comps/Overlay";

//styled-components
const Content = styled.div`
  margin: 10%;

  & > div {
    min-width: 100%;
    max-width: 100%;
  }
`;

const Panel = styled.div`
  display: flex;
  min-width: 100%;
  max-width: 100%;
  // min-height: 535px;
  // max-height: 535px;
  min-height: 526.8px;
  max-height: 526.8px;
  margin-top: 0.71cm;
`;
const Left = styled.div`
  flex: 1;
  min-height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Right = styled.div`
  flex: 2;
  min-height: 100%;
  max-height: 100%;
  margin-left: 8.49px;
  display: flex;
  overflow: hidden;
`;

export function App() {
  return (
    <Content>
      <ItemContextProvider>
        <Intro />
        <ButtonGradient />
        <Panel>
          <Left>
            <NewItemForm />
            <Search />
          </Left>
          <Right>
            <ItemList />
          </Right>
        </Panel>

        <Overlay />
      </ItemContextProvider>
    </Content>
  );
}
