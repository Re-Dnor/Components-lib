import Home from "../Home/Home";
import ShowModal from "../ShowModal/ShowModal";
import TestForm from "../TestForm/TestForm";
import TodoList from "../TodoList/TodoList";
import { ContentProps } from "../types/Content.types";

function Content({ currentForm }: ContentProps) {
  //Default render Home
  const renderCurrentForm = (form: string) => {
    if (form === "Test form") return <TestForm />;
    if (form === "Todo list") return <TodoList />;
    if (form === "Show modal") return <ShowModal />;

    return <Home />;
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "80%", height: "100%", overflowY: "auto" }}>
      {renderCurrentForm(currentForm)}
    </div>
  );
}

export default Content;
