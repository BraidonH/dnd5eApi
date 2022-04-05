import "../App.scss";
import React, { useState } from "react";

const Input = (props) => {
  return (
    <div className="inputContainer">
      <input className="input" placeholder="..." onChange={props.search} />
    </div>
  );
};

export default Input;
