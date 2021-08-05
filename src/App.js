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
  align-items: center;
  justify-content: center;
  min-width: 100%;
  max-width: 100%;
  min-height: 535px;
  max-height: 535px;
  
  margin-top: 0.71cm;

  & > :nth-child(1) {
    flex: 1;
  }
  & > :nth-child(2) {
    flex: 2;
  }
`;
const Left = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Right = styled.div`
  // min-height: 100%;
  // max-height: 100%;
  margin-left: 8.49px;
  display: flex;
  // box-sizing: border-box;
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
