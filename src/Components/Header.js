import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <NavLink className={styles.link} to="/" end>
            Produtcs
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="contacts">
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
