import React from "react";
import IconContainer from "./IconContainer";
import styles from "./AccessOption.module.scss";

function AccessOption({ icon, label, message, type, active }) {
  return (
    <div className={`${styles.accessOption} ${styles[type]} ${active}`}>
      <IconContainer>{icon}</IconContainer>
      <div>
        <p className={styles.accessLabel}>{label}</p>
        <span className="caption">{message}</span>
      </div>
    </div>
  );
}

export default AccessOption;
