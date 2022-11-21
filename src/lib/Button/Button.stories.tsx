import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Button } from "../index";
import "../../index.css";

const meta: ComponentMeta<typeof Button> = {
  title: "Design System/Button",
  component: Button
};
export default meta;

export const Default: ComponentStoryObj<typeof Button> = {
  args: {
    children: "Button"
  }
};

export const SuccessWithClickHandler: ComponentStoryObj<typeof Button> = {
  args: {
    children: "Success",
    color: "success",
    onClick: () => alert("button clicked")
  }
};

export const Disabled: ComponentStoryObj<typeof Button> = {
  args: {
    children: "disabled",
    disabled: true,
    size: "large",
    onClick: () => alert("button clicked")
  }
};
