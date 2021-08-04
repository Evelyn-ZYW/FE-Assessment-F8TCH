import React from "react";
import styled from "styled-components";

import Item from "../Item";

const Container = styled.div``;
const Column = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default Column;
