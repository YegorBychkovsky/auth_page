import React from "react";
import styles from "./styles.module.scss";
import cn from "classnames";

function CheckBox({ children }) {
  const [isChecked, setIsChecked] = React.useState(false);
  const handleCheckBoxClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.checkBoxWrapper}>
      <div
        className={cn(styles.checkbox, {
          [styles.checkbox_checked]: isChecked,
        })}
        onClick={handleCheckBoxClick}
      ></div>
      <div className={styles.checkboxName}>{children}</div>
    </div>
  );
}

export default CheckBox;
