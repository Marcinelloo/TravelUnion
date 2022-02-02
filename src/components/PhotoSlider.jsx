import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/esm/Container";

import photo1 from "../photos/photo1.jpg";
import photo2 from "../photos/photo2.jpg";
import photo3 from "../photos/photo3.jpg";

const PhotoSlider = () => {
  return (
    <>
      <Container style={{ marginTop: "2%" }}>
        <Carousel indicators={false} touch fade interval={4000}>
          <Carousel.Item bsPrefix="animationOne carousel-item">
            <img
              style={{
                height: "500px",
                borderRadius: "20px",
              }}
              className="d-block w-100"
              src={photo1}
              alt="First slide"
            />
            <Carousel.Caption
              bsPrefix="carousel-caption"
              style={{ left: "-20%", right: "20%" }}
            >
              <h3 className="animationOne">
                {" "}
                Jakie miejsce jest twoim marzeniem?
              </h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item bsPrefix="carousel-item">
            <img
              style={{
                height: "500px",
                borderRadius: "20px",
              }}
              className="d-block w-100"
              src={photo2}
              alt="Second slide"
            />

            <Carousel.Caption
              bsPrefix="carousel-caption"
              style={{ left: "-20%", right: "20%" }}
            >
              <h3>Jakie miejsce jest twoim marzeniem?</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{
                height: "500px",
                borderRadius: "20px",
              }}
              className="d-block w-100"
              src={photo3}
              alt="Third slide"
            />
            <Carousel.Caption
              bsPrefix="carousel-caption"
              style={{ left: "-20%", right: "20%" }}
            >
              <h3 style={{ color: "white" }}>
                Jakie miejsce jest twoim marzeniem?
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default PhotoSlider;
