import React, { useContext, useState } from "react";
import styled from "styled-components";

import ButtonGradient from "./comps/Button/ButtonGradient";
import ItemHeader from "./comps/ItemHeader";
import NewItemForm from "./comps/NewItemForm";
import Search from "./comps/Search";
import ItemList from "./comps/ItemList";
import ItemContextProvider, { ItemContext } from "./contexts/ItemContext";
import Intro from "./comps/Intro";
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
  height: 535px;
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
  min-height: 100%;
  margin-left: 8.49px;
  display: flex;

  & > div {
    flex: 1;
    box-sizing: border-box;
    border: 8.49px solid #fff;
  }
  & > :nth-child(1) {
    margin-right: -8.49px;
  }
`;

export function App() {
  //the value entered in the input
  // const [input, setInput] = useStateWithLocalStorage("myValueInLocalStorage");
  const [input, setInput] = useState("");

  //the column that is being selected
  const [column, setColumn] = useState("");

  //the keyword that is being searched

  const [keyword, setKeyword] = useState("");
  //set column to what is selected
  const handleColumn = (col) => {
    setColumn(col);
  };

  //an array of inputs showing in the column
  const [inputArrayOne, setInputArrayOne] = useState([]);
  const [inputArrayTwo, setInputArrayTwo] = useState([]);

  //set display for the overlay
  const [displayOverlay, setDisplayOverlay] = useState(false);
  const [message, setMessage] = useState("");

  // setDisplayOverlay(true);
  // setMessage("Please enter the item name 🤔");

  // console.log("inputArrayOne: ", inputArrayOne, typeof inputArrayOne);
  // console.log("inputArrayTwo: ", inputArrayTwo, typeof inputArrayTwo);

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
