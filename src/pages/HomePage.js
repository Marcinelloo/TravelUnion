import React from "react";

import PhotoSlider from "../components/PhotoSlider";
import RecomendedOffer from "../components/RecomendedOffer";
import SearchPanel from "../components/SearchPanel";

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
