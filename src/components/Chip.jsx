import React from "react";
import styles from "./Chip.module.scss";

function Chip({ label, rightIcon, leftIcon, style }) {
  return (
    <div className={styles.chip} style={style}>
      {leftIcon ? <span>{leftIcon}</span> : null}
      <span>{label}</span>
      {rightIcon ? <span>{rightIcon}</span> : null}
    </div>
  );
}

export default Chip;
