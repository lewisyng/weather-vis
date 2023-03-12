import styles from "./Input.module.scss";
import { forwardRef, HTMLInputTypeAttribute } from "react";
import clsx from "clsx";

type InputProps = {
  className?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  value: string;
  onChange: (e: any) => void;
  size?: "small" | "large";
  centerText?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      placeholder,
      value,
      onChange,
      size = "large",
      centerText,
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        className={clsx(
          styles.input,
          styles[`input--${size}`],
          centerText && styles["input--center"],
          className
        )}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  }
);
