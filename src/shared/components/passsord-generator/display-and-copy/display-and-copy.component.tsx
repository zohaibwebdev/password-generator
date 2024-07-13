import React from "react";
import styles from "./display-and-copy.module.css";
import { usePasswordContext } from "@/context/password-context/password-context";
const DisplayAndCopy = () => {
  const { password, passwordGen } = usePasswordContext();

  const handleReGen = () => {
    passwordGen();
  };

  function handleCopy() {
    navigator.clipboard.writeText(password);
    alert("Copied your secure password to  clipboard!");
  }
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input type="text" className={styles.input} readOnly value={password} />
        <button className={styles.reButton} onClick={handleReGen}>
          🔃
        </button>
      </div>
      <button className={styles.button} onClick={handleCopy}>
        copy
      </button>
    </div>
  );
};

export default DisplayAndCopy;
