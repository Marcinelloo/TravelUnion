import React, { useRef } from "react";
import Button from "react-bootstrap/esm/Button";
import MessageQueue, { useMessageQueue } from "../MessageQueue/Index";
import styled from "styled-components";

const Wraper = styled.div`
  margin-top: 5%;
  padding-top: 3%;
  padding-left: 10%;
  background-color: #fbfbfb;
  padding-bottom: 3%;
`;
const BigContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 280px);
  justify-content: center;
  padding-bottom: 5%;
  gap: 10px;
`;

const MiddleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const SmallContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 12px;
`;

const TextDisplay = styled.div`
  inline-size: 320px;
  overflow-wrap: break-word;
  font-weight: bold;
  font-style: italic;
`;

const BottomPage = () => {
  const input = useRef();
  const { addMessage, removeMessage, messages } = useMessageQueue();

  const submitHandler = (e) => {
    e.preventDefault();
    addMessage(
      `Succes, check ${input.current.value} cuz we have a discount for you!`,
      "success"
    );
    input.current.value = "";
  };

  return (
    <>
      <MessageQueue messages={messages} removeMessage={removeMessage} />
      <Wraper>
        <BigContainer>
          <div>
            <h4>O TravelUNION</h4>
            <div style={{ display: "grid", paddingLeft: "7%" }}>
              <div className="animateClick">
                <i className="fa fa-angle-right"></i> O nas
              </div>
              <div className="animateClick">
                <i className="fa fa-angle-right"></i> Kontakt
              </div>
              <div className="animateClick">
                <i className="fa fa-angle-right"></i> Biura Sprzedaży
              </div>
              <div className="animateClick">
                <i className="fa fa-angle-right"></i> Nagrody i wyrożnienia
              </div>
            </div>
          </div>
          <div>
            <h4>Jak rezerwować?</h4>
            <div style={{ display: "grid", paddingLeft: "7%" }}>
              <div className="animateClick">
                <i className="fa fa-angle-right"></i> Warunki umowy
              </div>
              <div className="animateClick">
                <i className="fa fa-angle-right"></i> Dane osobowe
              </div>
              <div className="animateClick">
                <i className="fa fa-angle-right"></i> Regulamin serwisu
              </div>
              <div className="animateClick">
                <i className="fa fa-angle-right"></i> Rezerwacja krok po kroku
              </div>
              <div className="animateClick">
                <i className="fa fa-angle-right"></i> Linie lotnicze
              </div>
            </div>
          </div>
          <div>
            <h4>Polecamy</h4>
            <div style={{ display: "grid", paddingLeft: "7%" }}>
              <div className="animateClick">
                <i className="fa fa-angle-right"></i> Promocje
              </div>
              <div className="animateClick">
                <i className="fa fa-angle-right"></i> Katalogi online
              </div>
              <div className="animateClick">
                <i className="fa fa-angle-right"></i> Program lolajnosciowy
              </div>
              <div className="animateClick">
                <i className="fa fa-angle-right"></i> Bon wakacyjny
              </div>
              <div className="animateClick">
                <i className="fa fa-angle-right"></i> Uslugi dodatkowe
              </div>
            </div>
          </div>
          <div>
            <h4>Znajdz nas na</h4>
            <div
              style={{
                display: "flex",
                paddingLeft: "7%",
                color: "black",
                gap: "5px",
              }}
            >
              <i className="fab fa-facebook animateClick"></i>
              <i className="fab fa-youtube animateClick"></i>
              <i className="fab fa-instagram animateClick"></i>
              <i className="fab fa-twitter animateClick"></i>
              <i className="fab fa-linkedin-in animateClick"></i>
            </div>
          </div>
        </BigContainer>
        <MiddleContainer>
          <TextDisplay>
            Zapisz się do newslettera, a otrzymasz 10% rabatu na pierwsza
            wycieczke
          </TextDisplay>
          <div>
            <form
              id="email"
              style={{ display: "flex" }}
              onSubmit={submitHandler}
            >
              <input
                ref={input}
                type="email"
                placeholder="example@example.com"
                required
                style={{
                  height: "auto",
                  border: "1px solid grey",
                  paddingLeft: "2%",
                  minWidth: "350px",
                  borderRadius: "20px 0px 0px 20px",
                }}
              ></input>
              <Button
                type="submit"
                variant="danger"
                style={{
                  borderRadius: "0px 20px 20px 0px",
                  minWidth: "100px",
                  border: "1px solid grey",
                }}
              >
                Zapisz się!
              </Button>
            </form>
          </div>
        </MiddleContainer>
      </Wraper>
      <SmallContainer>
        Copyright 2022 TravelUNION | Wszelkie prawa zastrzeżone.
      </SmallContainer>
    </>
  );
};

export default BottomPage;
