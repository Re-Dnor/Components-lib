import { ReactNode } from "react";

export type ModalType = {
  children: ReactNode | ReactNode[];
  open: boolean;
  handleClose: (arg: boolean) => void;
};

export type StyledModalType = Omit<ModalType, "handleClose">;
