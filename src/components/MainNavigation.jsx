import "../index.css";
import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currency } from "../redux/actions/currencyActions";
import { Link } from "react-router-dom";
import LogoSide from "./NavComponents/LogoSide";
import NavItems from "./NavComponents/NavItems";
import Currency from "./NavComponents/Currency";
import styled from "styled-components";
import LoginInfo from "./NavComponents/LoginInfo";

const Wraper = styled.section`
  background-color: #dee2e6;
`;

const BigContainer = styled.section`
  padding: 1% 2% 1% 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MiddleContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding-right: 30px;
`;

const MainNavigation = () => {
  const [colorMode, setColorMode] = useState("light");

  const dispatch = useDispatch();
  const [data, setData] = useState("null");
  const currencyInfo = useSelector((state) => state.currency);
  const { userInfo } = useSelector((state) => state.userSignin);

  useLayoutEffect(() => {
    dispatch(currency());
  }, []);

  useEffect(() => {
    if (currencyInfo.loading === false) {
      setData(currencyInfo.object);
    }
  }, [currencyInfo.loading]);

  return (
    <Wraper>
      <BigContainer>
        <LogoSide />
        <MiddleContainer>
          <NavItems>{data !== "null" ? <Currency data={data} /> : ""}</NavItems>
          {userInfo !== null && userInfo !== undefined ? (
            <LoginInfo name={userInfo.name} />
          ) : (
            <Link
              className="underline-animation"
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
              }}
              to="/signin"
            >
              Zaloguj
            </Link>
          )}
        </MiddleContainer>
      </BigContainer>
    </Wraper>
  );
};

export default MainNavigation;
