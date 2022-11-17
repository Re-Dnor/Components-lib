import { useState } from "react";
import { Sidebar } from "./lib/index";
import { sidebarList } from "./utils/sidebarList";
import Content from "./components/Content/Content";

function App() {
  const [currentForm, setCurrentForm] = useState<string>("Home");

  return (
    <>
      <Sidebar list={sidebarList} setCurrentForm={setCurrentForm} currentForm={currentForm} />
      <Content currentForm={currentForm} />
    </>
  );
}

export default App;
