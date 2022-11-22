import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { MultiText } from "../index";
import "../../index.css";

const meta: ComponentMeta<typeof MultiText> = {
  title: "Design System/MultiText",
  component: MultiText
};
export default meta;

export const Default: ComponentStoryObj<typeof MultiText> = {
  args: {
    name: "Placeholder",
    placeholder: "Write here",
    rows: 10
  }
};
