import React from "react";
import styled from "styled-components";

const BigContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 400px));
  justify-content: center;
  margin-top: 6%;
  background-color: #fbfbfb;
  gap: 10%;
`;

const Body = (props) => {
  return <BigContainer>{props.children}</BigContainer>;
};

export default Body;
