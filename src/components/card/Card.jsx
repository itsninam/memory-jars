import React from "react";

import { Link } from "react-router-dom";

function Card({ children }) {
  return <li className="card-item">{children}</li>;
}

function Navigation({ navigateTo, children }) {
  return <Link to={`${navigateTo}`}>{children}</Link>;
}

function Title({ title, style, className }) {
  return (
    <h2 style={style} className={className}>
      {title}
    </h2>
  );
}

function Subtitle({ children, style, className }) {
  return (
    <p className={className} style={style}>
      {children}
    </p>
  );
}

function Meta({ children, className, style }) {
  return (
    <p style={style} className={`caption ${className ?? ""}`}>
      {children}
    </p>
  );
}

function Body({ children, className, style }) {
  return (
    <p style={style} className={className}>
      {children}
    </p>
  );
}

function FlexContainer({ children }) {
  return <div className="flex-container">{children}</div>;
}

function Icon({ children, style }) {
  return (
    <div className="icon-container" style={style}>
      {children}
    </div>
  );
}

Card.Navigation = Navigation;
Card.Title = Title;
Card.Subtitle = Subtitle;
Card.Meta = Meta;
Card.FlexContainer = FlexContainer;
Card.Icon = Icon;
Card.Body = Body;

export default Card;
