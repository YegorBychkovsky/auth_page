import React from "react";
import "./styles.scss";

function Button({ children, onClick, theme }) {
  return (
    <button className={`button button-${theme}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
