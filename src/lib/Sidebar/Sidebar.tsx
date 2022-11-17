import { SidebarProps } from "../types/Sidebar.types";
import { StyledSidebar } from "./Sidebar.styles";
import { StyledSidebarBtn, StyledSidebarSpan } from "./SidebarItems.styles";

export function Sidebar({ list, setCurrentForm, currentForm }: SidebarProps) {
  const handleChangeCurrentForm = (form: string) => {
    setCurrentForm(form);
  };

  return (
    <StyledSidebar>
      <ul>
        {list.map((form) => (
          <li key={form}>
            <StyledSidebarBtn onClick={() => handleChangeCurrentForm(form)} active={form === currentForm}>
              <StyledSidebarSpan>{form}</StyledSidebarSpan>
            </StyledSidebarBtn>
          </li>
        ))}
      </ul>
    </StyledSidebar>
  );
}
