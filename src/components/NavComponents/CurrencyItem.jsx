import React from "react";
import { Dropdown } from "react-bootstrap";

const CurrencyItem = ({ shortcut, polishName, setStartCurrency }) => {
  return (
    <Dropdown.Item onClick={() => setStartCurrency(shortcut)}>
      {shortcut} - {polishName}
    </Dropdown.Item>
  );
};

export default CurrencyItem;
