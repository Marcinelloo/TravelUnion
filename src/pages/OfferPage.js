import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { offerById } from "../redux/actions/offerActions";
import MainInformation from "../components/offerPageComponents/MainInformation";
import Body from "../components/offerPageComponents/Body";
import RateInfo from "../components/offerPageComponents/RateInfo";
import Opinions from "../components/offerPageComponents/Opinions";
import PhotoGalery from "../components/offerPageComponents/PhotoGalery";
import Description from "../components/offerPageComponents/Description";
import { useLayoutEffect } from "react";
import { opinionByOffer } from "../redux/actions/opinionActions";

const data2 = {
  opis: "Sangate Hotel Airport położony jest zaledwie 800 metrów od międzynarodowego lotniska Chopina, tuż przy głównej trasie prowadzącej do centrum miasta. Obiekt oferuje pokoje z bezpłatnym WiFi oraz telewizorem z dostępem do kanałów satelitarnych. Odległość od centrum Warszawy wynosi około 7 km.Wszystkie pokoje w hotelu Sangate Airport mieszczą łazienkę z prysznicem lub wanną. Do dyspozycji Gości jest w nich miejsce do pracy z biurkiem oraz telefonem. W pokojach zapewniono zestaw do parzenia kawy i herbaty oraz wodę mineralną.",
  dana1: 2 * 10,
  dana3: 3 * 10,
  dana4: 4 * 10,
};

const OfferPage = () => {
  const params = useParams();
  const id = params.id;

  const [data, setData] = useState(null);
  const [opinionData, setOpinionData] = useState(null);

  const dispatch = useDispatch();
  const offerInformation = useSelector((state) => state.offerById);
  const opinionsInformation = useSelector((state) => state.offerOpinions);

  useLayoutEffect(() => {
    dispatch(offerById(id));
    dispatch(opinionByOffer(id));
  }, []);

  useEffect(() => {
    if (opinionsInformation.loading === false && !opinionsInformation.error) {
      setOpinionData(opinionsInformation.object);
    }
  }, [opinionsInformation]);

  useEffect(() => {
    if (offerInformation.loading === false) {
      setData(offerInformation.object);
    }
  }, [offerInformation]);

  return (
    <div>
      {data !== null ? <MainInformation data={data} offerId={id} /> : ""}
      {data !== null ? (
        <Body>
          <PhotoGalery data={data} />
          <Description data={data} helpData={data2} />
        </Body>
      ) : (
        ""
      )}
      {data !== null ? <RateInfo data={data2} /> : ""}
      {opinionData !== null ? (
        <Opinions data={opinionData} />
      ) : (
        <div style={{ textAlign: "center" }}>
          Niestety, nie mamy zadnych opini na temat tego hotelu :(
        </div>
      )}
      {/* // zrobic jakis message box ze nie ma opini */}
    </div>
  );
};

export default OfferPage;
