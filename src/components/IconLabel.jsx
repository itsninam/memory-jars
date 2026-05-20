import styles from "./IconLabel.module.scss";

function IconLabel({ icon, label, className }) {
  return (
    <p className={`${className} ${styles.iconLabel}`}>
      {icon}
      <span>{label}</span>
    </p>
  );
}

export default IconLabel;
