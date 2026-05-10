import React from "react";

function CardList({ children, className }) {
  return <ul className={`card-list ${className ?? ""}`}>{children}</ul>;
}

export default CardList;
