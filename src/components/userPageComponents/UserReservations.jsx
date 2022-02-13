import React, { useContext, useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getByUserReservation } from "../../redux/actions/reservationActions";
import { UserContext } from "../UserContext";
import ShowReserwation from "./ShowReserwation";

const UserReservations = () => {
  const dispatch = useDispatch();
  const [reservation, setReservation] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const reserwationInformation = useSelector(
    (state) => state.getReservationByUser
  );
  const { user } = useContext(UserContext);

  useLayoutEffect(() => {
    dispatch(getByUserReservation(user._id));
  }, [user]);

  useEffect(() => {
    if (
      reserwationInformation.object !== null &&
      reserwationInformation.object !== undefined &&
      reserwationInformation.loading !== true
    ) {
      setReservation(reserwationInformation.object);
    }
  }, [reserwationInformation]);

  function sortHandler(sort) {
    setSortBy(sort);
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
      {reservation === null ? (
        " Nie masz jeszcze zadnych rezerwacji!"
      ) : (
        <div
          style={{
            minWidth: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
            }}
          >
            <Dropdown
              style={{
                borderRadius: "10px",
                transform: "scale(1.1)",
              }}
            >
              <Dropdown.Toggle
                style={{
                  color: "black",
                  backgroundColor: "transparent",
                  borderColor: "green",
                  fontSize: "12px",
                  borderRadius: "10px",
                }}
              >
                Filtrowanie
              </Dropdown.Toggle>
              <Dropdown.Menu
                style={{
                  borderRadius: "20px",
                }}
              >
                <Dropdown.Item
                  style={{
                    borderRadius: "10px 10px 0px 0px",
                    fontSize: "10px",
                  }}
                  onClick={() => sortHandler("rosnaco")}
                >
                  Od Najnowszych
                </Dropdown.Item>
                <Dropdown.Item
                  style={{
                    borderRadius: "0px 0px 10px 10px",
                    fontSize: "10px",
                  }}
                  onClick={() => sortHandler("malejaco")}
                >
                  Od Nastarszych
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ShowReserwation
              data={reservation}
              sortBy={sortBy}
              user={user}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserReservations;
