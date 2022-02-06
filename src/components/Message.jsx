import React, { useRef, useState } from "react";

const MessageBox = ({ type, info }) => {
  return (
    <div
      className={type}
      style={{
        boxShadow: " 0 2px 8px black",
        maxWidth: "300px",
        maxHeight: "100px",
        borderRadius: "40px",
      }}
    >
      {info}
    </div>
  );
};

export default MessageBox;
