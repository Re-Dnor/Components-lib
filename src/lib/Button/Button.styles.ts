import styled from "styled-components";
import { ButtonProps, Variant_Color } from "../types/Button.types";

export const StyledButton = styled.button<ButtonProps>`
  background-color: var(
    --${(props) => (props.disabled ? "gray" : props.variant ?? "primary")}
  );
  border-radius: 6px;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  color: var(
    ${(props) =>
      props.variant && (props.variant === Variant_Color.Success ?? props.variant === Variant_Color.Warning)
        ? "--dark"
        : "--light"}
  );
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  font-weight: 600;
  letter-spacing: 1px;
  opacity: ${(props) => (props.disabled ? "0.6" : "1")};
  outline: none;
  padding: ${(props) => {
    if (props.size === "large") return "0.8rem";
    if (props.size === "medium") return "0.6rem";
    if (props.size === "small") return "0.3rem";
    return "0.6rem";
  }}};
  font-size: ${(props) => {
    if (props.size === "large") return "1rem";
    if (props.size === "medium") return "0.8rem";
    if (props.size === "small") return "0.7rem";
    return "0.8rem";
  }}};
  transition: 0.4s;

  &:not([disabled]):hover {
    opacity: 0.8;
  }

  &:active {
    box-shadow: none;
  }
`;
