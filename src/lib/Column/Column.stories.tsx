import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import Column from "./Column";
import Row from "../Row/Row";
import Button from "../Button/Button";
import "../../index.css";

// описание компонента и ссылка на него
const meta: ComponentMeta<typeof Column> = {
  title: "Design System/Column",
  component: Column
};
export default meta;


// дефолтная кнопка
export const Default: ComponentStoryObj<typeof Column> = {
  args: {
    children: <><Row><Button>First button</Button></Row> <Row><Button>Second button</Button></Row></>,
    justifyContent: "start",
    alignItems: "center"
  }
};