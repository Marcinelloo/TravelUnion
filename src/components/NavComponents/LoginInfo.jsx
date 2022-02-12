import React from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signout } from "../../redux/actions/userActions";

const LoginInfo = ({ name }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logoutHandler() {
    dispatch(signout());
    navigate("/");
  }

  function moveToUserData() {
    navigate("/userInfo");
  }
  function moveToUserReservations() {
    navigate("/userReservations");
  }

  function moveToUserTravels() {
    navigate("/userTravels");
  }

  function moveToUserComments() {
    navigate("/userComments");
  }

  return (
    <Dropdown style={{ borderRadius: "10px" }}>
      <Dropdown.Toggle
        className="animateClick"
        style={{
          color: "black",
          backgroundColor: "transparent",
          borderColor: "white",
          fontSize: "12px",
          borderRadius: "10px",
        }}
      >
        {name}
      </Dropdown.Toggle>
      <Dropdown.Menu
        style={{
          borderRadius: "20px",
        }}
      >
        <Dropdown.Item
          style={{
            borderRadius: "10px 10px 0px 0px",
          }}
          onClick={() => moveToUserData()}
        >
          Moje dane
        </Dropdown.Item>
        <Dropdown.Item onClick={() => moveToUserReservations()}>
          Moje rezerwacje
        </Dropdown.Item>
        <Dropdown.Item onClick={() => moveToUserComments()}>
          Moje komentarze
        </Dropdown.Item>
        <Dropdown.Item
          style={{
            borderRadius: "0px 0px 10px 10px",
            color: "red",
          }}
          onClick={() => logoutHandler()}
        >
          Wyloguj
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LoginInfo;
