import React from "react";
import { Container, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import MessageQueue, { useMessageQueue } from "../../MessageQueue/Index";
import { addReservation } from "../../redux/actions/reservationActions";
import Rating from "../Rating";

const MainInformation = ({ data, offerId }) => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userSignin);
  const { addMessage, removeMessage, messages } = useMessageQueue();

  function messageHandler(e) {
    e.preventDefault();
    if (userInfo !== null && userInfo !== undefined) addMessageHandler();
    else errorMessageHandler();
  }

  function errorMessageHandler() {
    addMessage(`Aby zarezerowac oferte musisz sie zalogowac!`, "error");
  }

  function addMessageHandler() {
    dispatch(addReservation(userInfo._id, offerId, new Date()));
    addMessage(
      `Oferta zostal pomyslnie dla ciebie zarezerowana, znajdziesz ja w swoich rezerwacjach!`,
      "success"
    );
  }

  return (
    <div>
      <MessageQueue messages={messages} removeMessage={removeMessage} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Container
          style={{
            display: "flex",
            paddingTop: "5%",
            paddingLeft: "3%",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", gap: "15px" }}>
            <div>[ {data.hotelType} ]</div>
            <div>
              <h1>{data.hotelName}</h1>
            </div>
            <div style={{ marginTop: "6%" }}>
              <Rating stars={data.stars}></Rating>
            </div>
          </div>
          <Button
            variant="outline-success"
            style={{
              marginBottom: "1%",
              marginRight: "10%",
              borderRadius: "20px 0px 10px 10px",
            }}
            onClick={(event) => messageHandler(event)}
          >
            Zarezerwuj
          </Button>
        </Container>
      </div>
      <div style={{ paddingLeft: "14%" }}>
        <i className="fas fa-map-marker-alt" /> {data.address}
      </div>
    </div>
  );
};

export default MainInformation;
