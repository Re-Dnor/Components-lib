import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import Row from "./Row";
import Button from "../Button/Button";
import "../../index.css";

// описание компонента и ссылка на него
const meta: ComponentMeta<typeof Row> = {
  title: "Design System/Row",
  component: Row
};
export default meta;


// дефолтная кнопка
export const Default: ComponentStoryObj<typeof Row> = {
  args: {
    children: <><Button>First button</Button> <Button>Second button</Button></>,
    gap: true
  }
};