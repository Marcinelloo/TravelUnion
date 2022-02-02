import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";

const BottomPage = () => {
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    document.getElementById("email").reset();
  };

  return (
    <>
      <div
        style={{
          marginTop: "5%",
          paddingTop: "3%",
          paddingLeft: "10%",
          backgroundColor: "#FBFBFB",
          paddingBottom: "3%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, 280px)",
            justifyContent: "center",
            paddingBottom: "5%",
            gap: "10px",
          }}
        >
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
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              inlineSize: "320px",
              overflowWrap: "break-word",
              fontWeight: "bold",
              fontStyle: "italic",
            }}
          >
            Zapisz się do newslettera, a otrzymasz 10% rabatu na pierwsza
            wycieczke
          </div>
          <div>
            <form
              id="email"
              style={{ display: "flex" }}
              onSubmit={submitHandler}
            >
              <input
                type="email"
                placeholder="example@example.com"
                required
                onChange={(e) => setEmail(e.target.value)}
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
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", fontSize: "12px" }}
      >
        Copyright 2022 TravelUNION | Wszelkie prawa zastrzeżone.
      </div>
    </>
  );
};

export default BottomPage;
