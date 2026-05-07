import React from "react";

function Header({ title, navigation, actions }) {
  return (
    <header>
      <>{title && <h2>{title}</h2>}</>
      <>{navigation && <nav>{navigation}</nav>}</>
      <>{actions && <div>{actions}</div>}</>
    </header>
  );
}

export default Header;
