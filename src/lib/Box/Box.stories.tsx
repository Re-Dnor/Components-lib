import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Box, Button, Row, Input } from "../index";
import "../../index.css";
import React from "react";

const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>): void => {
  e.preventDefault();
  alert("Yep");
};

const meta: ComponentMeta<typeof Box> = {
  title: "Design System/Box",
  component: Box
};
export default meta;

export const WrapperBoxContentInTheCenter: ComponentStoryObj<typeof Box> = {
  args: {
    children: <Button>First button</Button>,
    justifyContent: "center",
    alignItems: "center"
  }
};

export const Form: ComponentStoryObj<typeof Box> = {
  args: {
    children: (
      <>
        <Row>
          <Input label="Name" name="name" type="name" required />
        </Row>
        <Row>
          <Input label="Password" name="pass" type="password" required />
        </Row>
        <Button>Submit</Button>
      </>
    ),
    component: "form",
    justifyContent: "center",
    alignItems: "center",
    onSubmit: handleSubmitForm
  }
};
