import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const BasicStyle = styled.span`
  font-size: 40px;
  font-weight: bold;
`;

const FirstSpan = styled.span`
  color: #a93226;
`;

const SecondSpan = styled.span`
  color: #76448a;
`;

const ThirdSpan = styled.span`
  color: #1f618d;
`;

const FourthSpan = styled.span`
  color: #b7950b;
`;

const LogoSide = () => {
  return (
    <React.Fragment>
      <Link to="/" style={{ textDecoration: "none" }}>
        <BasicStyle className="animation">
          <FirstSpan>Tra</FirstSpan>
          <SecondSpan>vel</SecondSpan>
          <ThirdSpan>UN</ThirdSpan>
          <FourthSpan>ION</FourthSpan>
        </BasicStyle>
      </Link>
    </React.Fragment>
  );
};

export default LogoSide;
