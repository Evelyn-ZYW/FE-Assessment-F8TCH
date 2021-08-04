import React, { useState } from "react";
import styled from "styled-components";

import ButtonGradient from "./comps/Button/ButtonGradient";
import ItemHeader from "./comps/ItemHeader";
import Input from "./comps/Input";
import Dropdown from "./comps/Dropdown";
import ButtonOutline from "./comps/Button/ButtonOutline";
import Search from "./comps/Search";
import Item from "./comps/Item";

const Content = styled.div`
  margin: 10%;

  & > div {
    min-width: 100%;
    max-width: 100%;
  }
`;
const Intro = styled.div`
  margin-bottom: 2cm;
`;
const Title = styled.h1`
  color: #fff;
`;

const Desc = styled.h5`
  color: #8fffee;
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

  & > div {
    flex: 1;
  }
  & > :nth-child(1) {
    & > :nth-child(1) {
      margin-bottom: 0.71cm;
    }
  }
  & > :nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: calc(0.71cm * 2);
  }
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
  const columnName = ["COLUMN 1", "COLUMN 2"];

  //the value entered in the input
  const [input, setInput] = useState("");

  //the column that is being selected
  const [column, setColumn] = useState("");

  //set column to what is selected
  const handleColumn = (col) => {
    setColumn(col);
  };

  //an array of inputs showing in the column
  const [inputArrayOne, setInputArrayOne] = useState([]);
  const [inputArrayTwo, setInputArrayTwo] = useState([]);

  //add the item to the selected column
  const handleAddInput = () => {
    console.log("column selected: ", column);
    if (column === "COLUMN 1") {
      setInputArrayOne((inputArrayOne) => inputArrayOne.concat(input));
    } else if (column === "COLUMN 2")
      setInputArrayTwo((inputArrayTwo) => inputArrayTwo.concat(input));
  };
  // console.log("inputArrayOne: ", inputArrayOne, typeof inputArrayOne);
  // console.log("inputArrayTwo: ", inputArrayTwo, typeof inputArrayTwo);
  return (
    <Content>
      <Intro>
        <Title>Marvelous!</Title>
        <Desc>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since.
        </Desc>
      </Intro>
      <ButtonGradient />
      <Panel>
        <Left>
          <div>
            <Input
              onChangeInput={(e) => {
                setInput(e.target.value);
              }}
            />
            <Dropdown onColumn={handleColumn} />
          </div>
          <div>
            <ButtonOutline onAddItem={handleAddInput} />
            <Search />
          </div>
        </Left>
        <Right>
          {/* {columnName.map((col, index) => (
            <div key={index}>
              <ItemHeader text={col} />
              {column === "COLUMN 1"
                ? inputArrayOne.map((input, index) => (
                    <Item key={index} text={input} />
                  ))
                : null}
            </div>
          ))} */}
          <div>
            <ItemHeader text="COLUMN 1" />
            {column === "COLUMN 1"
              ? inputArrayOne.map((input, index) => (
                  <Item key={index} text={input} />
                ))
              : null}
          </div>
          <div>
            <ItemHeader text="COLUMN 2" />
            {column === "COLUMN 2"
              ? inputArrayTwo.map((input, index) => (
                  <Item key={index} text={input} />
                ))
              : null}
          </div>
        </Right>
      </Panel>
    </Content>
  );
}
