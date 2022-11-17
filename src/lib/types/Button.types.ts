import { ButtonHTMLAttributes, MouseEventHandler } from "react";

export enum Variant_Color {
  Primary = "primary",
  Success = "success",
  Warning = "warning",
  Danger = "danger"
}

export type ButtonSize = "large" | "medium" | "small";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant_Color;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: ButtonSize;
};
