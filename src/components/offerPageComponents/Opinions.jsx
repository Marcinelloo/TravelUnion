import React from "react";
import { Container } from "react-bootstrap";
import Rating from "../Rating";

const Opinions = ({ data }) => {
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
      }}
    >
      <Container>
        <h3>Opinie naszych klinetów: </h3>
      </Container>
      <Container
        style={{
          padding: "3%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr)",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        {data.map((data, _id) => {
          return (
            <div
              key={_id}
              style={{
                boxShadow: " 0 2px 8px black",
                borderRadius: "20px",
                minWidth: "300px",
                padding: "5%",
                textAlign: "wrap",
                inlineSize: "320px",
                overflowWrap: "break-word",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>Imie: {data.imie}</div>
                <div>
                  <Rating stars={data.stars} />
                </div>
              </div>
              <div>Opis: {data.opis}</div>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default Opinions;
