import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  deleteOpinionByUser,
  opinionByUser,
  upgradeOpinionByUser,
} from "../../redux/actions/opinionActions";
import styled from "styled-components";

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

const UserComments = () => {
  const dispatch = useDispatch();
  const [commentsData, setCommentsData] = useState(null);
  const commentsInfo = useSelector((state) => state.userOpinions);
  const { userInfo } = useSelector((state) => state.userSignin);

  const [edit, setEdit] = useState(false);

  const nameInput = useRef();
  const rateInput = useRef();
  const descriptionInput = useRef();

  useLayoutEffect(() => {
    dispatch(opinionByUser(userInfo._id));
  }, []);

  useEffect(() => {
    if (
      commentsInfo.object !== null &&
      commentsInfo.object !== undefined &&
      commentsInfo.loading === false
    ) {
      setCommentsData(commentsInfo.object);
    } else if (
      (commentsInfo.object === null || commentsInfo.object === undefined) &&
      commentsInfo.loading !== false
    ) {
      setCommentsData(null);
    }
  }, [commentsInfo]);

  function resetHandler() {
    nameInput.current.value = "";
    rateInput.current.value = "";
    descriptionInput.current.value = "";
  }

  function enableEditingHandler() {
    setEdit(true);
  }

  function updateHandler(e) {
    setEdit(false);
    dispatch(
      upgradeOpinionByUser(
        e.target.value,
        nameInput.current.value,
        rateInput.current.value,
        descriptionInput.current.value
      )
    );
    setTimeout(() => {
      dispatch(opinionByUser(userInfo._id));
    }, 500);
    nameInput.current.value = "";
    rateInput.current.value = "";
    descriptionInput.current.value = "";
  }

  function deleteOfferHandler(e) {
    e.preventDefault();
    dispatch(deleteOpinionByUser(e.target.value));
    setTimeout(() => {
      dispatch(opinionByUser(userInfo._id));
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        {commentsData !== null
          ? commentsData.map((data) => {
              return (
                <Card key={data._id}>
                  <div style={{ fontSize: "16px" }}>
                    numer oferty: {data._id}
                  </div>
                  <label
                    style={{ fontStyle: "italic", fontSize: "14px" }}
                    htmlFor="name"
                  >
                    Imie: {data.name}
                  </label>
                  {edit === true ? (
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
                  ) : (
                    ""
                  )}
                  <label
                    style={{ fontStyle: "italic", fontSize: "14px" }}
                    htmlFor="name"
                  >
                    Ocena: {data.rate}
                  </label>
                  {edit === true ? (
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
                  ) : (
                    ""
                  )}
                  <label
                    style={{ fontStyle: "italic", fontSize: "14px" }}
                    htmlFor="name"
                  >
                    Opis: {data.description}
                  </label>
                  {edit === true ? (
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
                  ) : (
                    ""
                  )}
                  <div
                    style={{
                      marginTop: "10px",
                      display: "flex",
                      justifyContent: "right",
                      gap: "20px",
                    }}
                  >
                    <Button
                      value={data._id}
                      variant="outline-danger"
                      size="sm"
                      bsPrefix="btn"
                      style={{ borderRadius: "10px", fontSize: "13px" }}
                      onClick={(event) => deleteOfferHandler(event)}
                    >
                      usuń
                    </Button>

                    {edit === true ? (
                      <div style={{ display: "flex", gap: "10px" }}>
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
                          value={data._id}
                          variant="outline-success"
                          onClick={(e) => updateHandler(e)}
                          size="sm"
                          bsPrefix="btn"
                          style={{ borderRadius: "10px", fontSize: "13px" }}
                        >
                          aktualizuj
                        </Button>
                      </div>
                    ) : (
                      <Button
                        variant="outline-success"
                        onClick={(event) => enableEditingHandler(event)}
                        size="sm"
                        bsPrefix="btn"
                        style={{ borderRadius: "10px", fontSize: "13px" }}
                      >
                        edytuj
                      </Button>
                    )}
                  </div>
                </Card>
              );
            })
          : "Nie masz jeszcze komentarzy, mozesz je napisac po oplaceniu wycieczki!"}
      </div>
    </div>
  );
};

export default UserComments;
