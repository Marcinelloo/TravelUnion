import React from "react";
import { Container } from "react-bootstrap";
import PhotoGalery from "./PhotoGalery";

const data2 = {
  opis: "Sangate Hotel Airport położony jest zaledwie 800 metrów od międzynarodowego lotniska Chopina, tuż przy głównej trasie prowadzącej do centrum miasta. Obiekt oferuje pokoje z bezpłatnym WiFi oraz telewizorem z dostępem do kanałów satelitarnych. Odległość od centrum Warszawy wynosi około 7 km.Wszystkie pokoje w hotelu Sangate Airport mieszczą łazienkę z prysznicem lub wanną. Do dyspozycji Gości jest w nich miejsce do pracy z biurkiem oraz telefonem. W pokojach zapewniono zestaw do parzenia kawy i herbaty oraz wodę mineralną.",
  dana1: 2,
  dana3: 3,
  dana4: 4,
  dana5: 5,
  dana6: 6,
};

const Body = ({ data }) => {
  return (
    <Container>
      <PhotoGalery data={data} />
    </Container>
  );
};

export default Body;
