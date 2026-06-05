import React from "react";
import styles from "./Chip.module.scss";
import clsx from "clsx";

function Chip({ label, rightIcon, leftIcon, style, variant }) {
  return (
    <div className={clsx(styles.chip, styles[variant])} style={style}>
      {leftIcon ? <span>{leftIcon}</span> : null}
      <span>{label}</span>
      {rightIcon ? <span>{rightIcon}</span> : null}
    </div>
  );
}

export default Chip;
