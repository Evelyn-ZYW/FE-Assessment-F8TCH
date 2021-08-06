import React, { useContext, useState } from "react";
import { ItemContext } from "../../contexts/ItemContext";
import styled from "styled-components";
import Block from "../Block";

const Container = styled.div`
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
const ButtonCont = styled.div`
  margin-top: 50px;
  min-width: 200px;
`;

const Overlay = () => {
  const { displayOverlay, message } = useContext(ItemContext);
  return displayOverlay ? (
    <Container>
      <Popup>
        <h4>{message}</h4>
      </Popup>
      <ButtonCont>
        <Block text="Got it!" />
      </ButtonCont>
    </Container>
  ) : null;
};

export default Overlay;
