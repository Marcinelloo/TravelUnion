import React from "react";
import Card from "react-bootstrap/Card";
import { useParams, useLocation, Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import changeMonth from "../functions/changeDate";
import Rating from "./Rating";
import Button from "react-bootstrap/esm/Button";

const Offer = ({ data }) => {
  const navigate = useNavigate();

  const monthStart = changeMonth(data.dateFrom.split("-")[1]);
  const monthEnd = changeMonth(data.dateTo.split("-")[1]);

  const startDate =
    data.dateFrom.split("-")[2].substring(0, 2) + " " + monthStart;
  const endDate = data.dateTo.split("-")[2].substring(0, 2) + " " + monthEnd;

  function offerPageHandler(event) {
    event.preventDefault();
    navigate(`/:${data.id}`);
  }

  return (
    <>
      <Card
        style={{
          boxShadow: " 0 2px 8px rgba(0, 0, 0, 0.2)",
          borderRadius: "40px",
          height: "300px",
          width: "300px",
          backgroundColor: "# dD3D3D3",
        }}
      >
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/274545138.jpg?k=5b1b442023dc51205fcd23824c95f4aaae4ecd9f3f93b9636ff6d5f08f96454f&o=&hp=1"
          alt={data.hotelName}
          height="120px"
          width="298ąąpx"
          style={{ borderRadius: "40px 40px 0px 0px" }}
        />
        <Container>
          <div
            style={{
              display: "flex",
              gap: "5px",
            }}
          >
            <div style={{ color: "gray", fontStyle: "italic" }}>
              {data.hotelType}
            </div>
            <Rating stars={data.stars} />
          </div>
          <h4 style={{ marginBottom: "-1%" }}>{data.hotelName}</h4>

          <div style={{ fontSize: "11px" }}>
            {data.averageRate}
            /10 oceny: {data.opinions.length}
          </div>
          <div style={{ display: "flex", gap: "7px" }}>
            <div
              style={{
                marginTop: "9%",
                border: "0px",
                background: "black",
                height: "1px",
                width: "20%",
              }}
            />
            <div
              style={{
                marginTop: "6%",
                boxShadow: " 0 2px 8px rgba(0, 0, 0, 0.2)",
                borderRadius: "40px",
                height: "14px",
                width: "150px",
                backgroundColor: "lightGreen",
                color: "#228B22",
                fontSize: "10px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Tylko u nas {data.discount}% taniej*
            </div>
            <div
              style={{
                marginTop: "9%",
                border: "0px",
                background: "black",
                height: "1px",
                width: "20%",
              }}
            />
          </div>
          <div
            style={{
              textAlign: "right",
              fontSize: "12px",
              marginTop: "2%",
              marginBottom: "2%",
            }}
          >
            {startDate} - {endDate}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                paddingLeft: "4%",
                fontSize: "20px",
                color: "#228B22",
                fontWeight: "bold",
              }}
            >
              {data.price}
              <span style={{ fontSize: "16px" }}>zł</span>
              <span style={{ fontSize: "12px" }}>/{data.tripTerm}dni</span>
            </div>
            <div>
              <Button
                variant="outline-success"
                onClick={(event) => offerPageHandler(event)}
                size="sm"
                bsPrefix="btn"
                style={{ borderRadius: "10px", fontSize: "13px" }}
              >
                Zobacz Ofert{" "}
                <i
                  style={{ fontSize: "20px" }}
                  className="fa fa-angle-right"
                ></i>
              </Button>
            </div>
          </div>
          <div style={{ marginLeft: "2%", marginTop: "-2%", fontSize: "8px" }}>
            * rabat naliczany podczas tranzakcji
          </div>
        </Container>
      </Card>
    </>
  );
};

export default Offer;
