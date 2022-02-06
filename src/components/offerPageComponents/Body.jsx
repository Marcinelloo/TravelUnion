import React from "react";
import { Container } from "react-bootstrap";
import Description from "./Description";
import PhotoGalery from "./PhotoGalery";

const Body = ({ data, data2 }) => {
  return (
    <Container
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px,400px)",
        justifyContent: "center",
        marginTop: "6%",
        backgroundColor: "#FBFBFB",
        gap: "80px",
      }}
    >
      <PhotoGalery data={data} />
      <Description data={data} helpData={data2} />
    </Container>
  );
};

export default Body;
