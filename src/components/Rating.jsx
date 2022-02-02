import React from "react";

const Rating = ({ stars }) => {
  return (
    <div className="rating" style={{ fontSize: "70%" }}>
      <span>
        <i
          className={
            stars >= 1 ? "fa fa-star" : stars >= 0.5 ? "fa fa-star-half-o" : ""
          }
        ></i>
      </span>
      <span>
        <i
          className={
            stars >= 2 ? "fa fa-star" : stars >= 1.5 ? "fa fa-star-half-o" : ""
          }
        ></i>
      </span>
      <span>
        <i
          className={
            stars >= 3 ? "fa fa-star" : stars >= 2.5 ? "fa fa-star-half-o" : ""
          }
        ></i>
      </span>
      <span>
        <i
          className={
            stars >= 4 ? "fa fa-star" : stars >= 3.5 ? "fa fa-star-half-o" : ""
          }
        ></i>
      </span>
      <span>
        <i
          className={
            stars >= 5 ? "fa fa-star" : stars >= 4.5 ? "fa fa-star-half-o" : ""
          }
        ></i>
      </span>
    </div>
  );
};

export default Rating;
