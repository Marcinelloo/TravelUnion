import "../index.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useEffect, useState } from "react";

import { BsSun, BsSunFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { currency } from "../redux/actions/currencyActions";

const MainNavigation = () => {
  const [startcolorMode, setStartColorMode] = useState("light");
  const [startLanguage, setStartLanguage] = useState("PL");
  const [startCurrency, setStartCurrency] = useState("PLN");
  const [colorMode, setColorMode] = useState("light");

  const dispatch = useDispatch();
  const [data, setData] = useState("null");
  const currencyInfo = useSelector((state) => state.currency);

  useEffect(() => {
    dispatch(currency());
  }, []);

  useEffect(() => {
    if (currencyInfo.loading === false) {
      setData(currencyInfo.object);
    }
  }, [currencyInfo.loading]);

  function createCurrency() {
    return data.map((element) => {
      return (
        <NavDropdown.Item
          key={element._id}
          onClick={() => setStartCurrency(element.shortcut)}
        >
          {element.shortcut} -{" "}
          {startLanguage === "PL" ? element.polishName : element.englishName}
        </NavDropdown.Item>
      );
    });
  }

  return (
    <>
      <Navbar bg={colorMode}>
        <Container>
          <Navbar.Brand href={`#${startLanguage}`}>
            <span
              style={{ color: "#A93226", fontWeight: "bold", fontSize: "40px" }}
            >
              Tra
            </span>
            <span
              style={{ color: "#76448A", fontWeight: "bold", fontSize: "40px" }}
            >
              vel
            </span>
            <span
              style={{
                color: "#1F618D ",
                fontWeight: "bold",
                fontSize: "40px",
              }}
            >
              UN
            </span>
            <span
              style={{ color: "#B7950B", fontWeight: "bold", fontSize: "40px" }}
            >
              ION
            </span>
          </Navbar.Brand>
          <Nav className="justify-content-end flex-grow-1 p-3">
            <NavDropdown align="end" title={startLanguage} id="dropdown-1">
              <NavDropdown.Item
                href={`#${startLanguage}`}
                onClick={() => setStartLanguage("PL")}
              >
                PL
              </NavDropdown.Item>
              <NavDropdown.Item
                href={`#${startLanguage}`}
                onClick={() => setStartLanguage("EN")}
              >
                EN
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown align="end" title={startCurrency} id="dropdown-2">
              <Container>{data !== "null" ? createCurrency() : ""}</Container>
            </NavDropdown>
          </Nav>
          {colorMode === "light" ? (
            <BsSunFill onClick={() => setColorMode("dark")} />
          ) : (
            <BsSun onClick={() => setColorMode("light")} />
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default MainNavigation;
