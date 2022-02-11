import React from "react";
import styled from "styled-components";

const FlexStyle = styled.div`
display: flex,
algin-items: center,
justify-content: center,
gap: 10px`;

const NavItems = (props) => {
  return <FlexStyle>{props.children}</FlexStyle>;
};

export default NavItems;
