import styled from "styled-components";
import React from "react";
import Carousel from "react-bootstrap/Carousel";

import photo1 from "../photos/PhotoHome_1.jpg";
import photo2 from "../photos/PhotoHome_2.jpg";
import photo3 from "../photos/PhotoHome_3.jpg";

const Wraper = styled.div`
  margin: 0% 0% 5% 0%;
`;

const PhotoSlider = () => {
  return (
    <>
      <Wraper>
        <Carousel indicators={false} touch fade interval={6000}>
          <Carousel.Item bsPrefix="animationOne carousel-item">
            <img
              style={{
                height: "400px",
              }}
              className="d-block w-100"
              src={photo1}
              alt="First slide"
            />
            <Carousel.Caption
              bsPrefix="carousel-caption"
              style={{ left: "-20%", right: "20%" }}
            >
              <h2
                className="animation"
                style={{ color: "black", fontWeight: "bold" }}
              >
                {" "}
                Niezapomniane chwile!
              </h2>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item bsPrefix="carousel-item">
            <img
              style={{
                height: "400px",
              }}
              className="d-block w-100"
              src={photo2}
              alt="Second slide"
            />

            <Carousel.Caption
              bsPrefix="carousel-caption"
              style={{ left: "-20%", right: "20%" }}
            >
              <h2
                className="animation"
                style={{ color: "White", fontWeight: "bold" }}
              >
                Zwiedź z nami cały Świat!
              </h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{
                height: "400px",
              }}
              className="d-block w-100"
              src={photo3}
              alt="Third slide"
            />
            <Carousel.Caption
              bsPrefix="carousel-caption"
              style={{ left: "-20%", right: "20%" }}
            >
              <h2
                className="animation"
                style={{ color: "white", fontWeight: "bold" }}
              >
                Jakie miejsce jest twoim marzeniem?
              </h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Wraper>
    </>
  );
};

export default PhotoSlider;
