import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import Button, { Variant_Color } from "./Button";
import "../../index.css";

// описание компонента и ссылка на него
const meta: ComponentMeta<typeof Button> = {
  title: "Design System/Button",
  component: Button
};
export default meta;

// истории
// дефолтная кнопка
export const Default: ComponentStoryObj<typeof Button> = {
  args: {
    children: "primary"
  }
};
// заблокированная кнопка
export const Disabled: ComponentStoryObj<typeof Button> = {
  args: {
    children: "disabled",
    disabled: true,
    size: "small"
  }
};
// успех
export const SuccessVariant: ComponentStoryObj<typeof Button> = {
  args: {
    children: "success",
    variant: Variant_Color.Success,
    size: "large"
  }
};
// кнопка с обработчиком нажатия
export const WithClickHandler: ComponentStoryObj<typeof Button> = {
  args: {
    children: "click me",
    onClick: () => alert("button clicked")
  }
};