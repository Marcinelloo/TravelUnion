import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import MessageQueue, { useMessageQueue } from "../../MessageQueue/Index";
import { useRef } from "react";

const Wraper = styled.div`
  padding: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const InfoBox = styled.div`
  max-width: 800px;
  width: 100%;
  max-height: 800px;
`;

const UserData = () => {
  const { userInfo } = useSelector((state) => state.userSignin);
  const dispatch = useDispatch();
  const colors = ["#CCDFEC", "#F9AB47", "#D96242", "#A13A34", "#D24D55"];
  const [randColor, setRandColor] = useState(0);
  const [name, setName] = useState(null);
  const [surname, setSurname] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);

  const nameInput = useRef();
  const surnameInput = useRef();
  const phoneNumberInput = useRef();
  const emailInput = useRef();

  const { addMessage, removeMessage, messages } = useMessageQueue();

  useLayoutEffect(() => {
    setRandColor(() => Math.floor(Math.random() * colors.length));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    addMessage(
      `Twoje dane zostały zaktualizowane, wyloguj się i zaloguj aby je zobaczyc ponownie!`,
      "success"
    );
    nameInput.current.value = "";
    surnameInput.current.value = "";
    phoneNumberInput.current.value = "";
    emailInput.current.value = "";
    // tu bedzie update
  };

  return (
    <Wraper>
      <MessageQueue messages={messages} removeMessage={removeMessage} />
      <InfoBox>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            gap: "40px",
            padding: "2%",
          }}
        >
          <div
            style={{
              borderRadius: "50%",
              background: colors[randColor],
              width: "100px",
              height: "100px",
              marginLeft: "10%",
            }}
          />
          <div style={{ transform: "translateY(5px)" }}>
            <p style={{ fontSize: "20px", transform: "translateY(25px)" }}>
              {userInfo.name} {userInfo.surname}
            </p>
            <p
              style={{
                fontSize: "12px",
                transform: "translateY(6px)",
                color: "grey",
              }}
            >
              Warszawa, Polska
            </p>
          </div>
        </div>
      </InfoBox>
      <form onSubmit={submitHandler}>
        <InfoBox>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: "100px",
              padding: "3% 0% 4% 0%",
            }}
          >
            <div>
              <label style={{ fontStyle: "italic" }} htmlFor="name">
                Imie
              </label>
              <input
                ref={nameInput}
                style={{
                  borderRadius: "10px",
                  border: `1px solid ${colors[randColor]}`,
                  boxShadow: "white",
                  padding: "1% 0% 1% 3%",
                  transform: "scale(1.1)",
                }}
                type="text"
                id="name"
                placeholder={userInfo.name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label style={{ fontStyle: "italic" }} htmlFor="name">
                Nazwisko
              </label>
              <input
                ref={surnameInput}
                style={{
                  borderRadius: "10px",
                  border: `1px solid ${colors[randColor]}`,
                  boxShadow: "white",
                  padding: "1% 0% 1% 3%",
                  transform: "scale(1.1)",
                }}
                type="text"
                id="name"
                placeholder={userInfo.surname}
                onChange={(e) => setSurname(e.target.value)}
              ></input>
            </div>
          </div>
        </InfoBox>
        <InfoBox>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: "80px",
            }}
          >
            <div>
              <label style={{ fontStyle: "italic" }} htmlFor="name">
                Telefon:
              </label>
              <input
                ref={phoneNumberInput}
                style={{
                  borderRadius: "10px",
                  border: `1px solid ${colors[randColor]}`,
                  boxShadow: "white",
                  padding: "1% 0% 1% 3%",
                  transform: "scale(1.1)",
                }}
                type="text"
                id="name"
                placeholder="662 222 222"
                onChange={(e) => setPhoneNumber(e.target.value)}
              ></input>
            </div>
            <div>
              <label style={{ fontStyle: "italic" }} htmlFor="name">
                Email
              </label>
              <input
                ref={emailInput}
                style={{
                  borderRadius: "10px",
                  border: `1px solid ${colors[randColor]}`,
                  boxShadow: "white",
                  padding: "1% 0% 1% 3%",
                  transform: "scale(1.1)",
                }}
                type="email"
                id="name"
                placeholder={userInfo.email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
          </div>
        </InfoBox>
        <InfoBox style={{ paddingTop: "10%", paddingLeft: "100px" }}>
          <Button
            variant="outline-success"
            type="submit"
            style={{
              border: `1px solid ${colors[randColor]}`,
              color: colors[randColor],
              transform: "scale(1.1)",
              fontWeight: "bold",
              marginBottom: "1%",
              marginLeft: "50%",
            }}
          >
            Uaktualnij
          </Button>
        </InfoBox>
      </form>
    </Wraper>
  );
};

export default UserData;
