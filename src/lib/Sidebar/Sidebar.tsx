import { StyledSidebar } from "./Sidebar.styles";
import { StyledSidebarBtn, StyledSidebarSpan } from "./SidebarItems.styles";

type Props = {
  list: string[];
  setCurrentForm: (from: string) => void;
  currentForm: string;
};

export type SidebarBtnProps = {
  onClick: () => void;
  active: boolean;
};

function Sidebar({ list, setCurrentForm, currentForm }: Props) {
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

export default Sidebar;
