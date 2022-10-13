import { StyledButton } from './Button.styles';
import { ButtonHTMLAttributes, MouseEventHandler } from "react";

export enum Variant_Color {
  Primary = "primary",
  Success = "success",
  Warning = "warning",
  Danger = "danger",
}

export enum Size {
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant_Color;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: Size;
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