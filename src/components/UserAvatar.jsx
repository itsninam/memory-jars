import React from "react";
import styles from "./UserAvatar.module.scss";

function UserAvatar({ children, background }) {
  return (
    <span className={styles.user} style={{ background: background }}>
      {children}
    </span>
  );
}

export default UserAvatar;
