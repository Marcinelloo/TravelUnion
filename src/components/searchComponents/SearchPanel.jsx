import React, { useEffect } from "react";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/esm/Button";
import OffersList from "../OffersList";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { cityExist } from "../../redux/actions/cityActions";
import { country, countryExist } from "../../redux/actions/countryActions";
import { useLayoutEffect } from "react";
import styled from "styled-components";

const Wraper = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 2%;
  algin-items: center;
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 40px;
  min-width: 700px;
  display: flex;
  flex-direction: row;
  padding: 1% 1% 1% 2.5%;
  min-height: 80px;
`;

const SearchPanel = () => {
  const dispatch = useDispatch();
  const [countryData, setCountryData] = useState("notExist");
  const countryInfo = useSelector((state) => state.country);

  const [currentCountryData, setCurrentCountryData] = useState("notExist");
  const currentCountryInfo = useSelector((state) => state.countryByName);

  const [cityData, setCityData] = useState(null);
  const cityInfo = useSelector((state) => state.city);

  const date = new Date();
  const currentDate = date.toISOString().substring(0, 10);

  const [children, setChildren] = useState(0);
  const [adult, setAdult] = useState(0);
  const [roomsNumber, setRoomsNumber] = useState(0);

  const [currentCountry, setCurrentCountry] = useState("Polska");

  const [goDate, setGoDate] = useState(currentDate);
  const [backDate, setBackDate] = useState(currentDate);

  //wczytanie wszytskich
  useLayoutEffect(() => {
    dispatch(country());
  }, []);

  useEffect(() => {
    if (countryInfo.loading === false && countryInfo.object !== "notExist") {
      setCountryData(countryInfo.object);
    } else {
      setCountryData("notExist");
    }
  }, [countryInfo.loading]);

  //wczytanie jednego wybranego
  useLayoutEffect(() => {
    dispatch(countryExist(currentCountry));
  }, [currentCountry]);

  useEffect(() => {
    if (
      currentCountryInfo.loading === false &&
      currentCountryInfo.object !== "notExist"
    ) {
      setCurrentCountryData(currentCountryInfo.object);
    } else {
      setCurrentCountryData("notExist");
    }
  }, [currentCountryInfo.loading]);

  //wczytanie miast
  useEffect(() => {
    if (currentCountryData !== "notExist") {
      dispatch(cityExist(currentCountryData[0]._id));
    }
  }, [currentCountryData]);

  useEffect(() => {
    if (cityInfo.loading === false) {
      setCityData(cityInfo.object);
    }
  }, [cityInfo.loading]);

  function createCountryToSearch() {
    return countryData.map((data, _id) => {
      return (
        <Dropdown.Item
          key={_id}
          style={{ fontSize: "12px" }}
          onClick={() => setCurrentCountry(data.name)}
        >
          {data.name}
        </Dropdown.Item>
      );
    });
  }

  return (
    <>
      <Wraper>
        <Card>
          <Form.Group
            controlId="city"
            style={{
              fontSize: "10px",
              paddingTop: "1%",
              minWidth: "150px",
            }}
          >
            <Dropdown>
              <Form.Label
                style={{
                  borderColor: "white",
                  backgroundColor: "transparent",
                  outline: "none",
                  marginLeft: "3%",
                  marginBottom: "1%",
                }}
              >
                Jaki kraj cie interesuje?
              </Form.Label>
              <span style={{ display: "flex", paddingLeft: "10%" }}>
                <i
                  style={{ marginLeft: "2%", marginTop: "6%" }}
                  className="fa fa-search"
                ></i>
                <Dropdown.Toggle
                  style={{
                    color: "black",
                    backgroundColor: "white",
                    borderColor: "white",
                    fontSize: "12px",
                  }}
                >
                  {currentCountry}
                </Dropdown.Toggle>
                <Dropdown.Menu
                  align={{ lg: "end" }}
                  style={{
                    borderRadius: "20px",
                  }}
                >
                  {countryData !== "notExist" ? createCountryToSearch() : ""}
                </Dropdown.Menu>
              </span>
            </Dropdown>
          </Form.Group>
          <Form.Group
            controlId="date"
            aria-required
            style={{
              marginLeft: "0%",
              fontSize: "12px",
              borderLeft: "1px solid lightgrey",
            }}
          >
            <Form.Label style={{ marginLeft: "10%" }}>
              Od kiedy masz czas?
            </Form.Label>
            <Form.Control
              type="date"
              name="dob"
              value={goDate}
              onChange={(date) => setGoDate(date.target.value)}
              style={{ marginLeft: "10%", fontSize: "12px" }}
            />
          </Form.Group>

          <Form.Group
            controlId="date"
            aria-required
            style={{
              marginLeft: "5%",
              fontSize: "12px",
              borderLeft: "1px solid lightgrey",
            }}
          >
            <Form.Label style={{ marginLeft: "10%" }}>
              Do kiedy masz czas??
            </Form.Label>
            <Form.Control
              type="date"
              name="dob"
              value={backDate}
              onChange={(date) => setBackDate(date.target.value)}
              style={{ marginLeft: "10%", fontSize: "12px" }}
            />
          </Form.Group>

          <Form.Group
            controlId="people"
            style={{
              marginLeft: "4%",
              fontSize: "12px",
              width: "25%",
              borderLeft: "1px solid lightgrey",
            }}
          >
            <Form.Label
              style={{
                borderRadius: "40px 0px 0px 40px",
                borderColor: "white",
                backgroundColor: "transparen",
                outline: "none",
                paddingLeft: "6%",
              }}
            >
              W ile osób?
            </Form.Label>
            <Dropdown>
              <Dropdown.Toggle
                style={{
                  color: "black",
                  backgroundColor: "white",
                  borderColor: "white",
                  fontSize: "12px",
                }}
              >
                <i className="fa fa-user" /> {adult + children}{" "}
                <i className="fa fa-bed"></i> {roomsNumber}
              </Dropdown.Toggle>
              <Dropdown.Menu
                align={{ lg: "end" }}
                style={{
                  borderRadius: "20px",
                }}
              >
                <Container
                  style={{
                    display: "grid",
                    gridColumn: "1",
                    justifyContent: "center",
                    fontSize: "10px",
                  }}
                >
                  <Table style={{ fontSize: "14px" }}>
                    <tbody>
                      <tr>
                        <th>
                          <i className="fa fa-user"></i>
                        </th>
                        <th>
                          <Form.Control
                            type="text"
                            style={{ fontSize: "12px" }}
                            placeholder={adult}
                          ></Form.Control>
                        </th>
                        <th>
                          <Button
                            size="sm"
                            variant="outline-dark"
                            onClick={() => setAdult(adult + 1)}
                          >
                            +
                          </Button>
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <i className="fa fa-child"></i>
                        </th>
                        <th>
                          <Form.Control
                            type="text"
                            style={{ fontSize: "12px" }}
                            placeholder={children}
                          ></Form.Control>
                        </th>
                        <th>
                          <Button
                            size="sm"
                            variant="outline-dark"
                            onClick={() => setChildren(children + 1)}
                          >
                            +
                          </Button>
                        </th>
                      </tr>
                      <tr>
                        <th>
                          {" "}
                          <i className="fa fa-bed"></i>
                        </th>
                        <th>
                          <Form.Control
                            type="text"
                            style={{ fontSize: "12px" }}
                            placeholder={roomsNumber}
                          ></Form.Control>
                        </th>
                        <th>
                          <Button
                            size="sm"
                            variant="outline-dark"
                            onClick={() => setRoomsNumber(roomsNumber + 1)}
                          >
                            +
                          </Button>
                        </th>
                      </tr>
                    </tbody>
                  </Table>
                </Container>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
        </Card>
      </Wraper>
      {currentCountryData !== "notExist" && cityData !== null ? (
        <OffersList
          country={currentCountryData}
          city={cityData}
          dateFrom={goDate}
          dateBack={backDate}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default SearchPanel;
