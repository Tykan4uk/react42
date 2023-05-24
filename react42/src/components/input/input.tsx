import { ReactNode } from "react";

import styles from "./styles.module.css";
import { FieldError } from "react-hook-form";

interface InputProps {
  label: string,
  children: ReactNode,
  error: FieldError | undefined
}

export const Input = ({ label, children, error }: InputProps) => {

  return (
    <>
      <div className={styles[!error ? "validBorder" : "invalidBorder"]}>
        <label className={styles["label"]}>{label}</label>
        {children}
      </div >
      {error && <span className={styles["error"]}>{error?.message}</span>}
    </>
  )
}