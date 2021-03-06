import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Dropdown from "react-bootstrap/esm/Dropdown";
import Container from "react-bootstrap/esm/Container";
import OfferCountry from "./OfferCountry";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { offer } from "../../redux/actions/offerActions";
import MessageBox from "../Message";

const OffersList = ({ country, city, dateFrom, dateBack }) => {
  const [sortBy, setSortBy] = useState("sortuj");

  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const offerInfo = useSelector((state) => state.offer);

  useEffect(() => {
    dispatch(offer(country[0]._id));
  }, [country]);

  useEffect(() => {
    if (offerInfo.loading === false) {
      setData(offerInfo.object);
    }
  }, [offerInfo]);

  function createOffers() {
    let counter = 0;

    city.map((city) => {
      counter += data.filter((data) => data.city === city._id).length;
    });

    if (counter === 0)
      return (
        <div
          style={{
            paddingLeft: "10%",
            fontSize: "14px",
            fontStyle: "italic",
            color: "darkred",
          }}
        >
          Właśnie opracowujemy dla ciebie nowe oferty, spróbuj wyszukać w innym
          kraju!{" "}
        </div>
      );

    return city.map((city, _id) => {
      if (data.filter((data) => data.city === city._id).length > 0) {
        return (
          <div key={_id}>
            <h3 style={{ marginTop: "4%", marginLeft: "2%" }}>
              Miasto: {city.cityName}
            </h3>
            <Container
              style={{
                display: "grid",
                justifyContent: "center",
              }}
            >
              <OfferCountry
                offer={data.filter((data) => data.city === city._id)}
                sort={sortBy}
              />
            </Container>
          </div>
        );
      }
    });
  }

  return (
    <>
      <div style={{ backgroundColor: "#FBFBFB" }}>
        <Container
          style={{
            marginTop: "3%",
            paddingBottom: "3%",
            paddingTop: "2%",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Najciekawsze wycieczki w {country[0].name}</h2>

            <Dropdown
              align={{ lg: "end" }}
              style={{ marginRight: "3%", marginTop: "1%" }}
            >
              <Dropdown.Toggle variant="outline-dark" id="dropdown">
                Sortuj wg:
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ borderRadius: "20px" }}>
                <Dropdown.Item onClick={() => setSortBy("alfabetycznie")}>
                  alfabetycznie
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortBy("niealfabetycznie")}>
                  niealfabetycznie
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortBy("cenaRosnaco")}>
                  cena rosnaco
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortBy("cenaMalejaco")}>
                  cena malejaco
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortBy("ocena")}>
                  ocena
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortBy("iloscDni")}>
                  ilosc dni
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortBy("rabat")}>
                  rabat
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortBy("iloscOpini")}>
                  ilosc opini
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSortBy("gwiazdki")}>
                  gwiazdki
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>{data !== null ? createOffers() : ""}</div>
        </Container>
      </div>
    </>
  );
};

export default OffersList;
