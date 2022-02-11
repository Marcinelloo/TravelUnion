import React from "react";
import MessageBox from "../components/Message";

import PhotoSlider from "../components/PhotoSlider";
import RecomendedOffer from "../components/RecomendedOffer";
import SearchPanel from "../components/searchComponents/SearchPanel";

const HomePage = () => {
  return (
    <>
      <PhotoSlider />
      <SearchPanel />
      <RecomendedOffer />
    </>
  );
};

export default HomePage;
