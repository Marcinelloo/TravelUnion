import React from "react";

import PhotoSlider from "../components/PhotoSlider";
import RecomendedOffer from "../components/offerComponents/RecomendedOffer";
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
