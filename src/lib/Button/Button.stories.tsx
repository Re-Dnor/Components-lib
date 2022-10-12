import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import UXButton, { Variant_Color } from "./Button";
import "../../index.css";

// описание компонента и ссылка на него
const meta: ComponentMeta<typeof UXButton> = {
  title: "Design System/Button",
  component: UXButton,
};
export default meta;

// истории
// дефолтная кнопка
export const Default: ComponentStoryObj<typeof UXButton> = {
  args: {
    children: "primary",
  },
};
// заблокированная кнопка
export const Disabled: ComponentStoryObj<typeof UXButton> = {
  args: {
    children: "disabled",
    disabled: true,
  },
};
// успех
export const SuccessVariant: ComponentStoryObj<typeof UXButton> = {
  args: {
    children: "success",
    variant: Variant_Color.Success,
  },
};
// кнопка с обработчиком нажатия
export const WithClickHandler: ComponentStoryObj<typeof UXButton> = {
  args: {
    children: "click me",
    onClick: () => alert("button clicked"),
  },
};