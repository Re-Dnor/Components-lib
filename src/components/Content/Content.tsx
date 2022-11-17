import Home from "../Home/Home";
import TestForm from "../TestForm/TestForm";
import AllComponents from "../AllComponents/AllComponents";
import { ContentProps } from "../types/Content.types";

function Content({ currentForm }: ContentProps) {
  //Default render Home
  const renderCurrentForm = (form: string) => {
    if (form === "Test form") return <TestForm />;
    if (form === "All components") return <AllComponents />;

    return <Home />;
  };

  return renderCurrentForm(currentForm);
}

export default Content;
