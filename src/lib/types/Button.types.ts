import { ButtonHTMLAttributes, MouseEventHandler } from "react";

type Variant_Color = "primary" | "success" | "warning" | "danger";

export type ButtonSize = "large" | "medium" | "small";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: Variant_Color;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: ButtonSize;
};
