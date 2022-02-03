import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { offerById } from "../redux/actions/offerActions";
import MainInformation from "../components/offerPageComponents/MainInformation";
import Body from "../components/offerPageComponents/Body";

const OfferPage = () => {
  const params = useParams();
  const id = params.id;

  const [data, setData] = useState(null);

  const dispatch = useDispatch();
  const offerInformation = useSelector((state) => state.offerById);

  useEffect(() => {
    dispatch(offerById(id));
  }, []);

  useEffect(() => {
    if (offerInformation.loading === false) {
      setData(offerInformation.object);
    }
  }, [offerInformation]);

  return (
    <div>
      {data !== null ? <MainInformation data={data} /> : ""}
      {data !== null ? <Body data={data} /> : ""}
    </div>
  );
};

export default OfferPage;
