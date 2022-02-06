import { LinearProgress } from "@mui/material";
import React from "react";

const RateInfo = ({ data }) => {
  return (
    <div
      style={{
        margin: "2% 5%",
        padding: "3%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr)",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <div
        style={{
          fontStyle: "italic",
          display: "grid",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <LinearProgress
          style={{
            width: "300px",
            height: "10px",
            borderRadius: "10px",
          }}
          variant="determinate"
          value={data.dana1}
          color="success"
        />
        <div>Ocena ogolna</div>
      </div>
      <div
        style={{
          fontStyle: "italic",
          display: "grid",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <LinearProgress
          style={{
            width: "300px",
            height: "10px",
            borderRadius: "10px",
          }}
          variant="determinate"
          value={data.dana3}
          color="success"
        />
        <div>Lokalizacja</div>
      </div>
      <div
        style={{
          fontStyle: "italic",
          display: "grid",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <LinearProgress
          style={{
            width: "300px",
            height: "10px",
            borderRadius: "10px",
          }}
          variant="determinate"
          value={data.dana4}
          color="success"
        />
        <div>Obsluga</div>
      </div>
    </div>
  );
};

export default RateInfo;
