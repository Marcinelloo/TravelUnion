import React, { useRef, useState } from "react";

const MessageBox = ({ type, info }) => {
  return (
    <div
      className={type}
      style={{
        boxShadow: " 0 2px 8px red",
        maxWidth: "400px",
        maxHeight: "100px",
        borderRadius: "20px",
        fontStyle: "italic",
        fontSize: "12px",
      }}
    >
      {info}
    </div>
  );
};

export default MessageBox;
