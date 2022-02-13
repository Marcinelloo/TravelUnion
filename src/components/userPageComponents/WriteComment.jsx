import React, { useLayoutEffect, useRef, useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { reservationById } from "../../redux/actions/reservationActions";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { createOpinion } from "../../redux/actions/opinionActions";

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

const WriteComment = () => {
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  const [showMessage, setShowMessage] = useState(false);

  const [reservationData, seReservationData] = useState(null);
  const dispatch = useDispatch();
  const reservationInfo = useSelector((state) => state.reservationById);

  const nameRef = useRef();
  const descriptionRef = useRef();
  const rateRef = useRef();

  useLayoutEffect(() => {
    dispatch(reservationById(id));
  }, []);

  useEffect(() => {
    if (
      reservationInfo.object !== null &&
      reservationInfo.object !== undefined &&
      reservationInfo.loading === false
    ) {
      seReservationData(reservationInfo.object);
    }
  }, [reservationInfo]);

  function resetHandler() {
    nameRef.current.value = "";
    descriptionRef.current.value = "";
    rateRef.current.value = "";
  }

  function submitHandler() {


    dispatch(
      createOpinion(
        reservationData.userID,
        reservationData.offerID,
        nameRef.current.value,
        rateRef.current.value,
        descriptionRef.current.value
      )
    );
    nameRef.current.value = "";
    descriptionRef.current.value = "";
    rateRef.current.value = "";
    setShowMessage(true);
    setTimeout(() => {
      navigate("/userReservations");
    }, 2000);
  }

  // stack navigator
  return (
    <div
      style={{
        display: "flex",
        padding: "5%",
        justifyContent: "center",
        gap: "30px",
      }}
    >
      {showMessage === false ? (
        <form onSubmit={() => submitHandler()}>
          <Card>
            <label
              style={{ fontStyle: "italic", fontSize: "14px" }}
              htmlFor="name"
            >
              Imie:
            </label>
            <input
              style={{
                borderRadius: "10px",
                border: `transparent`,
                boxShadow: "white",
                padding: "1% 0% 1% 3%",
              }}
              ref={nameRef}
              type="text"
              required
              placeholder="twoje imie"
            ></input>
            <label
              style={{ fontStyle: "italic", fontSize: "14px" }}
              htmlFor="name"
            >
              Ocena:
            </label>
            <input
              style={{
                borderRadius: "10px",
                border: `transparent`,
                boxShadow: "white",
                padding: "1% 0% 1% 3%",
              }}
              ref={rateRef}
              type="number"
              min="0"
              max="5"
              required
              placeholder="twoja ocena"
            ></input>
            <label
              style={{ fontStyle: "italic", fontSize: "14px" }}
              htmlFor="name"
            >
              Opis:
            </label>
            <input
              style={{
                borderRadius: "10px",
                border: `transparent`,
                boxShadow: "white",
                padding: "1% 0% 1% 3%",
                textalign: "justify",
              }}
              ref={descriptionRef}
              type="text"
              id="description"
              required
              placeholder="twoj opis"
            ></input>
            <div
              style={{ display: "flex", justifyContent: "right", gap: "20px" }}
            >
              <Button
                variant="outline-danger"
                size="sm"
                bsPrefix="btn"
                style={{ borderRadius: "10px", fontSize: "13px" }}
                onClick={(event) => resetHandler(event)}
              >
                reset
              </Button>
              <Button
                type="submit"
                variant="outline-success"
                size="sm"
                bsPrefix="btn"
                style={{ borderRadius: "10px", fontSize: "13px" }}
              >
                Wyslij
              </Button>
            </div>
          </Card>
        </form>
      ) : (
        <p style={{ fontWeight: "bold" }}>
          Dziekujemy za oddana opinie, teraz mozesz ja modyfikaowac w twoich
          opinia! Zaraz nastapi przekierowanie...
        </p>
      )}
      ;
    </div>
  );
};

export default WriteComment;
