import React from "react";

const PhotoGalery = ({ data }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minMax(150px,220px))",
        gridTemplateRows: "repeat(3, 100px)",
        gridColumnGap: "0px",
        gridRowGap: "0px",
        marginLeft: "10%",
        marginTop: "6%",
        gap: "15px",
      }}
    >
      <div
        style={{
          gridArea: "1 / 1 ",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      >
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/274545138.jpg?k=5b1b442023dc51205fcd23824c95f4aaae4ecd9f3f93b9636ff6d5f08f96454f&o=&hp=1"
          alt="photo1"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "30px 0px 30px 0px",
          }}
        ></img>
      </div>
      <div
        style={{
          gridArea: "2 / 1 ",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      >
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/274545138.jpg?k=5b1b442023dc51205fcd23824c95f4aaae4ecd9f3f93b9636ff6d5f08f96454f&o=&hp=1"
          alt="photo1"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "30px 0px 30px 0px",
          }}
        ></img>
      </div>
      <div
        style={{
          gridArea: "3 / 1 ",
          maxWidth: "250px",
          maxHeight: "100px",
        }}
      >
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/274545138.jpg?k=5b1b442023dc51205fcd23824c95f4aaae4ecd9f3f93b9636ff6d5f08f96454f&o=&hp=1"
          alt="photo1"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "30px 0px 30px 0px",
          }}
        ></img>
      </div>
      <div
        style={{
          gridArea: "1 / 2 / 4 / 3",
        }}
      >
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/274545138.jpg?k=5b1b442023dc51205fcd23824c95f4aaae4ecd9f3f93b9636ff6d5f08f96454f&o=&hp=1"
          alt="photo1"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "30px 0px 30px 0px",
          }}
        ></img>
      </div>
      <div
        style={{
          gridArea: "4 / 1 / 4 / 3 ",
          maxWidth: "auto",
          maxHeight: "100px",
        }}
      >
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/274545138.jpg?k=5b1b442023dc51205fcd23824c95f4aaae4ecd9f3f93b9636ff6d5f08f96454f&o=&hp=1"
          alt="photo1"
          style={{ width: "100%", height: "100%" }}
        ></img>
      </div>
    </div>
  );
};

export default PhotoGalery;
