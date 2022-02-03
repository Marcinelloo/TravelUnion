import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { useDispatch, useSelector } from "react-redux";
import { ourChoice, theBest } from "../redux/actions/offerActions";

import Offer from "./Offer";

const RecomendedOffer = () => {
  const dispatch = useDispatch();
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const ourChoiceInfo = useSelector((state) => state.ourChoice);
  const theBestInfo = useSelector((state) => state.theBest);

  useEffect(() => {
    dispatch(ourChoice());
  }, []);

  useEffect(() => {
    if (ourChoiceInfo.loading === false) setData1(ourChoiceInfo.object);
  }, [ourChoiceInfo]);

  useEffect(() => {
    dispatch(theBest());
  }, []);

  useEffect(() => {
    if (theBestInfo.loading === false) setData2(theBestInfo.object);
  }, [theBestInfo]);

  function createTheBest() {
    return data2.map((data, _id) => {
      if (3 > _id) {
        return <Offer key={_id} data={data} />;
      }
      return "";
    });
  }

  function createOurChoice() {
    return data1.map((data, _id) => {
      if (3 > _id) {
        return <Offer key={_id} data={data} />;
      }
      return "";
    });
  }

  return (
    <div
      style={{
        backgroundColor: "#FBFBFB",
        marginTop: "5%",
        marginBottom: "5%",
        padding: "3%",
        display: "grid",
        justifyContent: "center",
      }}
    >
      <h1>Najlepiej oceniane</h1>
      <Container
        style={{
          marginTop: "2%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr)",
          gap: "40px",
          paddingBottom: "3%",
        }}
      >
        {data2 !== null ? createTheBest() : ""}
      </Container>
      <h1>Najczesciej odwiedzane</h1>
      <Container
        style={{
          marginTop: "2%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr)",
          gap: "40px",
        }}
      >
        {data1 !== null ? createOurChoice() : ""}
      </Container>
    </div>
  );
};

export default RecomendedOffer;
