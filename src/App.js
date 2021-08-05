import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ButtonGradient from "./comps/Button/ButtonGradient";
import ItemHeader from "./comps/ItemHeader";
import Input from "./comps/Input";
import Dropdown from "./comps/Dropdown";
import ButtonOutline from "./comps/Button/ButtonOutline";
import Search from "./comps/Search";
import Item from "./comps/Item";

//styled-components
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
const Overlay = styled.div`
  position: fixed;
  display: ${(props) => (props.displayOverlay ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
const Popup = styled.div`
  color: #fff;
  background-color: #79818f;
  min-width: 500px;
  max-width: 500px;
  min-height: 200px;
  max-height: 200px;
  border-radius: 10px;
  box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px,
    rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px,
    rgb(255, 85, 85) 0px 0px 0px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.div`
  margin-top: 50px;
  min-width: 200px;
`;

// //localStorage
// const useStateWithLocalStorage = (localStorageKey) => {
//   const [value, setValue] = useState(
//     localStorage.getItem(localStorageKey) || ""
//   );

//   React.useEffect(() => {
//     localStorage.setItem(localStorageKey, value);
//   }, [value]);

//   return [value, setValue];
// };

export function App() {
  const columnName = ["COLUMN 1", "COLUMN 2"];

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

  //add the item to the selected column
  const handleAddInput = () => {
    // console.log("column selected: ", column);
    if (input && column) {
      if (column === "COLUMN 1") {
        setInputArrayOne((inputArrayOne) => inputArrayOne.concat(input));
        handleClearInput();
      } else if (column === "COLUMN 2")
        setInputArrayTwo((inputArrayTwo) => inputArrayTwo.concat(input));
      handleClearInput();
    } else if (!input) {
      setDisplayOverlay(true);
      setMessage("Please enter the item name 🤔");
    } else if (!column) {
      setDisplayOverlay(true);
      setMessage("Please select the column 🤔");
    }
  };
  const handleClearInput = () => {
    setDisplayOverlay(false);
    setInput("");
    setColumn("");
    console.log("Cleared!");
  };
  const handleRemoveOne = (index) => {
    const newArrayOne = inputArrayOne.filter((item, i) => i !== index);
    setInputArrayOne(newArrayOne);
  };
  const handleRemoveTwo = (index) => {
    const newArrayTwo = inputArrayTwo.filter((item, i) => i !== index);
    setInputArrayTwo(newArrayTwo);
  };
  const handleSearch = (value) => {
    console.log(value)
    let filteredArray = inputArrayOne.filter((o, i) => o.includes(value));
    setInputArrayOne(filteredArray);
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
      <ButtonGradient onClick={handleAddInput} />
      <Panel>
        <Left>
          <div>
            <Input
              value={input}
              onChangeInput={(e) => {
                setInput(e.target.value);
              }}
            />
            <Dropdown
              onColumn={handleColumn}
              value={column}
              text={column ? column : "CHOOSE COLUMN"}
            />
          </div>
          <div>
            <ButtonOutline onAddItem={handleAddInput} />
            <Search onSearch={(e) => handleSearch(e.target.value)} />
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
            {inputArrayOne.map((input, index) => (
              <Item
                key={index}
                text={input}
                onRemove={() => handleRemoveOne(index)}
              />
            ))}
          </div>
          <div>
            <ItemHeader text="COLUMN 2" />
            {inputArrayTwo.map((input, index) => (
              <Item
                key={index}
                text={input}
                onRemove={() => handleRemoveTwo(index)}
              />
            ))}
          </div>
        </Right>
      </Panel>
      <Overlay displayOverlay={displayOverlay}>
        <Popup>
          <h4>{message}</h4>
        </Popup>
        <Button>
          <ButtonGradient text="Got it!" onClick={handleClearInput} />
        </Button>
      </Overlay>
    </Content>
  );
}
