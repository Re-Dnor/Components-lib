import { StyledButton } from './Button.styles';
import { ButtonHTMLAttributes, MouseEventHandler } from "react";

export enum Variant_Color{
  Primary = "primary",
  Success = "success",
  Warning = "warning",
  Danger = "danger",
}

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant_Color;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

function UXButton({ children, variant, disabled, onClick }: Props) {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        if (disabled) return;
        onClick && onClick(e);
      };

  return (
    <StyledButton variant={ variant } onClick={ handleClick } disabled={ disabled }>
      { children }
    </StyledButton>
  );
}

export default UXButton;