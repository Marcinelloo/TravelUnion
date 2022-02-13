import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  deleteReservation,
  getByUserReservation,
  payForReservation,
} from "../../redux/actions/reservationActions";

const Card = styled.div`
  box-shadow: 0 1px 8px grey;
  border-radius: 40px;
  min-width: 400px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  padding: 4%;
  min-height: 80px;
`;

const ShowReserwation = ({ data, sortBy, user }) => {
  const dispatch = useDispatch();
  const reserwationInformation = useSelector(
    (state) => state.getReservationByUser
  );

  const [reserwationData, setReservationData] = useState(sort(data));

  function sort(data) {
    return data.sort((first, second) => {
      switch (sortBy) {
        case "rosnaco":
          return compareStrings(
            first.dateFrom.substring(0, 10),
            second.dateFrom.substring(0, 10)
          );
        case "malejaco":
          return compareStrings(
            second.dateFrom.substring(0, 10),
            first.dateFrom.substring(0, 10)
          );
        default:
          return "";
      }
    });
  }

  useEffect(() => {
    if (
      reserwationInformation.object !== null &&
      reserwationInformation.object !== undefined &&
      reserwationInformation.loading !== true
    ) {
      setReservationData(sort(reserwationInformation.object));
    } else if (
      (reserwationInformation.object === null ||
        reserwationInformation.object === undefined) &&
      reserwationInformation.loading !== false
    ) {
      setReservationData(null);
    }
  }, [reserwationInformation.loading]);

  function compareStrings(first, second) {
    if (first < second) return -1;
    else if (first > second) return 1;
    return 0;
  }

  function payOfferHandler(e) {
    dispatch(payForReservation(e.target.value));
    setTimeout(() => {
      dispatch(getByUserReservation(user._id));
    }, 500);
  }

  function deleteOfferHandler(e) {
    dispatch(deleteReservation(e.target.value));
    setTimeout(() => {
      dispatch(getByUserReservation(user._id));
    }, 500);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "30px",
      }}
    >
      {reserwationData !== null
        ? reserwationData.map((data) => {
            return (
              <Card key={data._id}>
                <div style={{ fontSize: "12px" }}>numer: {data._id} </div>
                <div style={{ fontSize: "12px" }}>imie: {user.name} </div>
                <div style={{ fontSize: "12px" }}>
                  nazwisko: {user.surname}{" "}
                </div>
                <div style={{ fontSize: "12px" }}>
                  data rezerwacji: {data.dateFrom.substring(0, 10)}
                </div>
                <div style={{ display: "flex", gap: "10px", fontSize: "12px" }}>
                  opłacone:{" "}
                  {data.payed === true ? (
                    <p style={{ color: "green", fontWeight: "bold" }}>tak </p>
                  ) : (
                    <p style={{ color: "red", fontWeight: "bold" }}>nie</p>
                  )}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "right",
                    gap: "20px",
                  }}
                >
                  {data.payed === false ? (
                    <Button
                      value={data._id}
                      variant="outline-danger"
                      onClick={(event) => payOfferHandler(event)}
                      size="sm"
                      bsPrefix="btn"
                      style={{ borderRadius: "10px", fontSize: "13px" }}
                    >
                      opłać
                    </Button>
                  ) : (
                    ""
                  )}
                  <Button
                    value={data._id}
                    variant="outline-danger"
                    onClick={(event) => deleteOfferHandler(event)}
                    size="sm"
                    bsPrefix="btn"
                    style={{ borderRadius: "10px", fontSize: "13px" }}
                  >
                    anuluj
                  </Button>
                </div>
              </Card>
            );
          })
        : " Nie masz jeszcze zadnych rezerwacji!"}
    </div>
  );
};

export default ShowReserwation;
