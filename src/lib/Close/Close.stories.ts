import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Close } from "../index";
import "../../index.css";

const meta: ComponentMeta<typeof Close> = {
  title: "Design System/Close",
  component: Close
};
export default meta;

export const Default: ComponentStoryObj<typeof Close> = {};

export const ColorAndHandlerClick: ComponentStoryObj<typeof Close> = {
  args: {
    color: "success",
    onClick: () => alert("Hello")
  }
};
