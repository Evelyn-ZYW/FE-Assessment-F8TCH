import React, { useContext } from "react";
import { ItemContext } from "../../contexts/ItemContext";
import styled from "styled-components";
import crossYellow from '../../../public/image/crossYellow.png';

const Container = styled.div`
  position: fixed;
  display: flex;
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
  z-index: 2;
`;
const Popup = styled.div`
  color: #555555;
  background-color: #FFF4DA;
  min-width: 500px;
  max-width: 500px;
  min-height: 200px;
  max-height: 200px;
  border-radius: 10px;
  // box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px,
  //   rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px,
  //   rgb(255, 85, 85) 0px 0px 0px 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  & > img {
    min-width: 20px;
    max-width: 20px;
    object-fit: contain;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }
`;

const Overlay = () => {
  const { displayOverlay, closeModal, message } = useContext(ItemContext);

  return (
    <>
      {displayOverlay ? (
        <Container onClick={closeModal}>
          <Popup>
            <img src={crossYellow} alt="" />
            <h3>{message}</h3>
          </Popup>
        </Container>
      ) : null}
    </>
  );
};

export default Overlay;
