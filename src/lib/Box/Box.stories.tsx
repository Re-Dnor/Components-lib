import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import Box from "./Box";
import Row from "../Row/Row";
import Button from "../Button/Button";
import "../../index.css";

const meta: ComponentMeta<typeof Box> = {
  title: "Design System/Column",
  component: Box
};
export default meta;

export const Default: ComponentStoryObj<typeof Box> = {
  args: {
    children: (
      <>
        <Row>
          <Button>First button</Button>
        </Row>{" "}
        <Row>
          <Button>Second button</Button>
        </Row>
      </>
    ),
    justifyContent: "start",
    alignItems: "center"
  }
};
