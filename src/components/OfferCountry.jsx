import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Offer from "./Offer";

const OfferCountry = ({ offer, sort }) => {
  const [maxToSee, setMaxToSee] = useState(4);

  const sortedObjects = offer.sort((first, second) => {
    switch (sort) {
      case "alfabetycznie":
        return compareStrings(first.hotelName, second.hotelName);
      case "niealfabetycznie":
        return compareStrings(second.hotelName, first.hotelName);
      case "cenaMalejaco":
        return second.price - first.price;
      case "cenaRosnaco":
        return first.price - second.price;
      case "rabat":
        return second.discount - first.discount;
      case "ocena":
        return second.averageRate - first.averageRate;
      case "iloscDni":
        return first.tripTerm - second.tripTerm;
      case "gwiazdki":
        return second.stars - first.stars;
      case "iloscOpini":
        return second.opinions.length - first.opinions.length;
      default:
        return "";
    }
  });

  function compareStrings(first, second) {
    if (first < second) return -1;
    else if (first > second) return 1;
    return 0;
  }

  return (
    <>
      <Container
        style={{
          marginTop: "2%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr)",
          gap: "40px",
        }}
      >
        {sortedObjects.map((data, _id) => {
          if (maxToSee > _id) {
            return <Offer key={_id} data={data} />;
          }
          return "";
        })}
      </Container>
      {offer.length > maxToSee ? (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "2%" }}
        >
          <Button
            variant="outline-success"
            onClick={() => setMaxToSee(maxToSee + 4)}
          >
            Click to see more <i className="fa fa-search-plus"></i>
          </Button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default OfferCountry;
