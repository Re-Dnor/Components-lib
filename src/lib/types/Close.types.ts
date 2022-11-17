import { MouseEventHandler } from "react";

export type CloseColor = "primary" | "danger" | "success" | "warning";

export type CloseProps = {
  color: CloseColor;
  large?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
