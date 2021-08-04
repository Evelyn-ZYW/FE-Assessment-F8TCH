import React from "react";
import styled from "styled-components";

import ButtonGradient from "./comps/Button/ButtonGradient";
import ItemHeader from "./comps/ItemHeader";
import Input from "./comps/Input";
import Dropdown from "./comps/Dropdown";
import ButtonOutline from "./comps/Button/ButtonOutline";
import Search from "./comps/Search";

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
            <Input />
            <Dropdown />
          </div>
          <div>
            <ButtonOutline />
            <Search />
          </div>
        </Left>
        <Right>
          <div>
            <ItemHeader text="COLUMN 1" />
          </div>
          <div>
            <ItemHeader text="COLUMN 2" />
          </div>
        </Right>
      </Panel>
    </Content>
  );
}
