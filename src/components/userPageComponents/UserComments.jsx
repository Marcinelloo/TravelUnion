import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  deleteOpinionByUser,
  opinionByUser,
} from "../../redux/actions/opinionActions";
import styled from "styled-components";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [commentsData, setCommentsData] = useState(null);
  const commentsInfo = useSelector((state) => state.userOpinions);
  const { user } = useContext(UserContext);

  useLayoutEffect(() => {
    dispatch(opinionByUser(user._id));
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

  function editHandler(e) {
    e.preventDefault();
    navigate(`/updateComment/${e.target.value}`);
  }

  function deleteOfferHandler(e) {
    e.preventDefault();
    dispatch(deleteOpinionByUser(e.target.value));
    setTimeout(() => {
      dispatch(opinionByUser(user._id));
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
                  <label
                    style={{ fontStyle: "italic", fontSize: "14px" }}
                    htmlFor="name"
                  >
                    Ocena: {data.rate}
                  </label>

                  <label
                    style={{ fontStyle: "italic", fontSize: "14px" }}
                    htmlFor="name"
                  >
                    Opis: {data.description}
                  </label>
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
                    <Button
                      value={data._id}
                      variant="outline-success"
                      onClick={(event) => editHandler(event)}
                      size="sm"
                      bsPrefix="btn"
                      style={{ borderRadius: "10px", fontSize: "13px" }}
                    >
                      edytuj
                    </Button>
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
