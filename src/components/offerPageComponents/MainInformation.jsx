import React from "react";
import { Container, Button } from "react-bootstrap";

import Rating from "../Rating";

const MainInformation = ({ data }) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Container
          style={{
            display: "flex",
            paddingTop: "5%",
            paddingLeft: "10%",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: "15px" }}>
            <div>[ {data.hotelType} ]</div>
            <div>
              <h1>{data.hotelName}</h1>
            </div>
            <div style={{ marginTop: "6%" }}>
              <Rating stars={data.stars}></Rating>
            </div>
          </div>
          <Button
            variant="outline-success"
            style={{
              marginBottom: "1%",
              marginRight: "10%",
              borderRadius: "20px 0px 10px 10px",
            }}
          >
            Zarezerwuj
          </Button>
        </Container>
      </div>
      <div style={{ paddingLeft: "22%" }}>
        <i className="fas fa-map-marker-alt" /> {data.address}
      </div>
    </div>
  );
};

export default MainInformation;
