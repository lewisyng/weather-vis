import { ComponentPropsWithoutRef, FunctionComponent } from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "icon";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
}

export const Button: FunctionComponent<ButtonProps> = ({
  className,
  children,
  variant = "primary",
  ...rest
}) => {
  return (
    <button
      className={clsx(
        className,
        styles.button,
        styles[`button--${variant}`],
        variant === "primary" && "button--primary"
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
