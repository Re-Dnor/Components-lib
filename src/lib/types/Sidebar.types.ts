export type SidebarProps = {
  list: string[];
  setCurrentForm: (from: string) => void;
  currentForm: string;
};

export type SidebarBtnProps = {
  onClick: () => void;
  active: boolean;
};
