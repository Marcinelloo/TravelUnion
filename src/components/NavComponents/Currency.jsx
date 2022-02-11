import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import CurrencyItem from "./CurrencyItem";

const Currency = ({ data }) => {
  const [currency, setCurency] = useState("PLN");

  function changeCurrencyHandler(newCurrency) {
    setCurency(newCurrency);
  }

  return (
    <Dropdown style={{ borderRadius: "10px" }}>
      <Dropdown.Toggle
        style={{
          color: "black",
          backgroundColor: "transparent",
          borderColor: "white",
          fontSize: "12px",
          borderRadius: "10px",
        }}
      >
        {currency}
      </Dropdown.Toggle>
      <Dropdown.Menu
        style={{
          borderRadius: "20px",
        }}
      >
        {data.map((data) => {
          return (
            <CurrencyItem
              key={data._id}
              shortcut={data.shortcut}
              polishName={data.polishName}
              setStartCurrency={changeCurrencyHandler}
            />
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Currency;
