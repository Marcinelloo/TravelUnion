import React from "react";

const Description = ({ data, helpData }) => {
  const discount = (data.price * data.discount) / 100;
  const discountPrice = data.price - discount;
  const dateFrom = data.dateFrom.substring(0, 10);
  const dateTo = data.dateTo.substring(0, 10);

  return (
    <div
      style={{
        boxShadow: " 0 2px 8px black",
        borderRadius: "20px",
        minWidth: "400px",
        padding: "2%",
        textAlign: "wrap",
        inlineSize: "320px",
        overflowWrap: "break-word",
      }}
    >
      <div style={{ fontSize: "12px", textIndent: "30px" }}>
        {helpData.opis}
      </div>
      <div style={{ paddingTop: "3%", paddingLeft: "10px" }}>
        <div style={{ display: "flex" }}>
          <i
            style={{ fontSize: "14px", paddingTop: "5px" }}
            className="fa fa-dollar-sign"
          />
          <div style={{ paddingLeft: "2%" }}>
            Cena:{" "}
            <span
              style={{
                color: "red",

                textDecoration: "line-through",
              }}
            >
              {data.price}
            </span>{" "}
            <span style={{ color: "green" }}>{discountPrice}</span>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <i
            style={{ fontSize: "12px", paddingTop: "6px" }}
            className="fa fa-star"
          />
          <div style={{ paddingLeft: "2%" }}>
            Srednia ocena: {data.averageRate}
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <i
            style={{ fontSize: "6px", paddingTop: "10px" }}
            className="fa fa-circle"
          />
          <div style={{ paddingLeft: "2%" }}>
            Ilosc ocen: {data.opinions.length}
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <i
            style={{ fontSize: "6px", paddingTop: "10px" }}
            className="fa fa-circle"
          />
          <div style={{ paddingLeft: "2%" }}>
            Do centrum: {data.toCenter} km
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <i
            style={{ fontSize: "6px", paddingTop: "10px" }}
            className="fa fa-circle"
          />
          <div style={{ paddingLeft: "2%" }}>Ilość dni: {data.tripTerm}</div>
        </div>
        <div style={{ display: "flex" }}>
          <i
            style={{ fontSize: "12px", paddingTop: "7px" }}
            className="fa fa-phone"
          />
          <div style={{ paddingLeft: "2%" }}>
            Telefon: <span style={{ fontStyle: "italic" }}>666 222 333</span>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <i
            style={{ fontSize: "12px", paddingTop: "7px" }}
            className="fa fa-envelope"
          />
          <div style={{ paddingLeft: "2%" }}>
            Mail:{" "}
            <span style={{ fontStyle: "italic" }}>Amanamela@gmail.com</span>
          </div>
        </div>
      </div>

      <div style={{ fontSize: "14px", paddingTop: "2%" }}>
        Oferta wazna od: <span style={{ fontWeight: "bold" }}>{dateFrom}</span>{" "}
        do : <span style={{ fontWeight: "bold" }}>{dateTo}</span>
      </div>
    </div>
  );
};

export default Description;
