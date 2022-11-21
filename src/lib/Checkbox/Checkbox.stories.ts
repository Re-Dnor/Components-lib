import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Checkbox } from "../index";
import "../../index.css";

const meta: ComponentMeta<typeof Checkbox> = {
  title: "Design System/Checkbox",
  component: Checkbox
};
export default meta;

export const Default: ComponentStoryObj<typeof Checkbox> = {
  args: {
    label: "This is checkbox",
    id: "123"
  }
};

export const Checked: ComponentStoryObj<typeof Checkbox> = {
  args: {
    label: "This is checkbox",
    id: "124",
    checked: true
  }
};
