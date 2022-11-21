import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Input } from "../index";
import "../../index.css";

const meta: ComponentMeta<typeof Input> = {
  title: "Design System/Input",
  component: Input
};
export default meta;

export const Default: ComponentStoryObj<typeof Input> = {
  args: {
    type: "name",
    name: "name",
    label: "Name"
  }
};

export const Large: ComponentStoryObj<typeof Input> = {
  args: {
    type: "email",
    value: "Mike@mail.com",
    large: true
  }
};
