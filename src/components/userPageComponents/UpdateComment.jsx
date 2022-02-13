import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  opinionByID,
  upgradeOpinionByUser,
} from "../../redux/actions/opinionActions";

const Card = styled.div`
  box-shadow: 0 1px 8px grey;
  border-radius: 20px;
  min-width: 400px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-height: 80px;
`;

const UpdateComment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  const nameInput = useRef();
  const rateInput = useRef();
  const descriptionInput = useRef();

  const [commentsData, setCommentsData] = useState(null);
  const opinion = useSelector((state) => state.opinionById);

  useLayoutEffect(() => {
    dispatch(opinionByID(id));
  }, []);

  useEffect(() => {
    if (
      opinion.object !== null &&
      opinion.object !== undefined &&
      opinion.loading === false
    ) {
      setCommentsData(opinion.object);
    } else if (
      (opinion.object === null || opinion.object === undefined) &&
      opinion.loading !== false
    ) {
      setCommentsData(null);
    }
  }, [opinion]);

  function resetHandler() {
    nameInput.current.value = "";
    rateInput.current.value = "";
    descriptionInput.current.value = "";
  }

  function updateHandler() {
    const name = nameInput.current.value
      ? nameInput.current.value
      : commentsData.name;
    const rate = rateInput.current.value
      ? rateInput.current.value
      : commentsData.rate;
    const description = descriptionInput.current.value
      ? descriptionInput.current.value
      : commentsData.description;

    dispatch(upgradeOpinionByUser(id, name, rate, description));

    setTimeout(() => {
      navigate(`/userComments`);
    }, 500);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "5%",
        maxWidth: "100%",
      }}
    >
      {commentsData !== null ? (
        <Card>
          <label
            style={{ fontStyle: "italic", fontSize: "14px" }}
            htmlFor="name"
          >
            Imie: {commentsData.name}
          </label>
          <input
            ref={nameInput}
            style={{
              borderRadius: "10px",
              border: `transparent`,
              boxShadow: "white",
              padding: "1% 0% 1% 3%",
            }}
            type="text"
            id="name"
            placeholder="wpisz nowa imie"
          ></input>
          <label
            style={{ fontStyle: "italic", fontSize: "14px" }}
            htmlFor="name"
          >
            Ocena: {commentsData.rate}
          </label>
          <input
            ref={rateInput}
            style={{
              borderRadius: "10px",
              border: `transparent`,
              boxShadow: "white",
              padding: "1% 0% 1% 3%",
            }}
            type="number"
            min="0"
            max="5"
            placeholder="wpisz nowa ocene"
          ></input>
          <label
            style={{ fontStyle: "italic", fontSize: "14px" }}
            htmlFor="name"
          >
            Opis: {commentsData.description}
          </label>
          <input
            ref={descriptionInput}
            style={{
              borderRadius: "10px",
              border: `transparent`,
              boxShadow: "white",
              padding: "1% 0% 1% 3%",
              textalign: "justify",
            }}
            type="text"
            id="name"
            placeholder="wpisz nowy opis"
          ></input>
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "right",
              gap: "20px",
            }}
          >
            <Button
              variant="outline-warning"
              onClick={(event) => resetHandler(event)}
              size="sm"
              bsPrefix="btn"
              style={{ borderRadius: "10px", fontSize: "13px" }}
            >
              reset
            </Button>
            <Button
              variant="outline-success"
              onClick={(e) => updateHandler(e)}
              size="sm"
              bsPrefix="btn"
              style={{ borderRadius: "10px", fontSize: "13px" }}
            >
              aktualizuj
            </Button>
          </div>
        </Card>
      ) : (
        ""
      )}
    </div>
  );
};

export default UpdateComment;
