import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

function Navigation({ children }) {
  return (
    <nav className={styles.mainNav}>
      <ul className={styles.navList}>{children}</ul>
    </nav>
  );
}

function Item({ children }) {
  return <li>{children}</li>;
}

function Link({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
      }
    >
      {children}
    </NavLink>
  );
}

Navigation.Item = Item;
Navigation.Link = Link;

export default Navigation;
