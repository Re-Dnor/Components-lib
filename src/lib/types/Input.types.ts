export type InputProps = {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
  value?: string;
  large?: boolean;
};

export type StyledInputProps = Omit<InputProps, "label">;
