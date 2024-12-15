import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

function Input({
  value,
  disabled,
  label,
  required = false,
  Icon,
  validation,
  onChange,
  name,
  initialTimer = null,
}) {
  const [timer, setTimer] = useState(initialTimer);
  const [isRunning, setIsRunning] = useState(false);
  const [isEmailWasSent, setIsEmailWasSent] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, timer]);

  const handleSend = () => {
    setTimer(initialTimer);
    setIsRunning(true);
    setIsEmailWasSent(true);
  };

  return (
    <div className={styles.fieldBlock}>
      <div className={styles.inputWrapper}>
        <label>
          {label} {required && <span className="required-star">*</span>}
        </label>
        <input
          name={name}
          className={styles.input}
          disabled={disabled}
          value={value ?? ""}
          onChange={onChange}
        />
        {initialTimer ? (
          timer > 0 && isEmailWasSent ? (
            <div className={styles.timer}>{`Resend (${timer}s)`}</div>
          ) : (
            <button
              className={styles.resendButton}
              type="button"
              onClick={handleSend}
            >
              {isEmailWasSent ? "Resend" : "Send"}
            </button>
          )
        ) : null}
        <Icon className={styles.icon} />
      </div>
      {validation && !disabled && (
        <p className={styles.validation}>
          <span>&#183;</span> {validation}
        </p>
      )}
    </div>
  );
}

export default Input;
