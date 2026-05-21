import styles from "./IconLabel.module.scss";

function IconLabel({ icon, label, className, gap }) {
  return (
    <p
      className={`${className ? className : ""} ${styles.iconLabel}`}
      style={{ gap: gap }}
    >
      {icon}
      <span>{label}</span>
    </p>
  );
}

export default IconLabel;
