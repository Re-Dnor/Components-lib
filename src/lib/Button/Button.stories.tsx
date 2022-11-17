import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Button } from "../index";
import { Variant_Color } from "../types/Button.types";
import "../../index.css";

const meta: ComponentMeta<typeof Button> = {
  title: "Design System/Button",
  component: Button
};
export default meta;

export const Default: ComponentStoryObj<typeof Button> = {
  args: {
    children: "primary"
  }
};

export const Disabled: ComponentStoryObj<typeof Button> = {
  args: {
    children: "disabled",
    disabled: true,
    size: "small"
  }
};

export const SuccessVariant: ComponentStoryObj<typeof Button> = {
  args: {
    children: "success",
    variant: Variant_Color.Success,
    size: "large"
  }
};

export const WithClickHandler: ComponentStoryObj<typeof Button> = {
  args: {
    children: "click me",
    onClick: () => alert("button clicked")
  }
};
