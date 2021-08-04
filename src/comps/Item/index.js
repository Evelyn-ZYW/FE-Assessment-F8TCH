import React from 'react';
import styled from 'styled-components';

import Cross from "../../../public/image/x.png";

const Container = styled.div`
  min-width: 100%;
  max-width: 100%;
  height: 65px;
  background-color: ${props=>props.bgcolor?props.bgcolor:"#ebebeb"};

  & > img {

  }
`;
const Item = () => {
  return (
    <Container>
      <span>{text}</span>
      <img src={Cross} alt="" />
    </Container>
  )
}

export default Item;