import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Row, Button } from "../index";
import "../../index.css";

const meta: ComponentMeta<typeof Row> = {
  title: "Design System/Row",
  component: Row
};
export default meta;

export const Default: ComponentStoryObj<typeof Row> = {
  args: {
    children: (
      <>
        <Button>First button</Button> <Button>Second button</Button>
      </>
    ),
    gap: true
  }
};
