import { useState } from "react";
import Sidebar from "./lib/Sidebar/Sidebar";
import Content from "./components/Content/Content";

const sidebarList = ["Home", "Test form", "All components"];

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
