import { Story, ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { useState } from "react";
import { Modal, Title, Button } from "../index";
import "../../index.css";
import { ModalType } from "../types/Modal.types";

const meta: ComponentMeta<typeof Modal> = {
  title: "Design System/Modal",
  component: Modal
};
export default meta;

// export default {
//   title: "Design System/Modal",
//   component: Modal,
//   parameters: { actions: { argTypesRegex: "^on.*" } }
// } as Meta;

export const Default: ComponentStoryObj<typeof Modal> = {
  args: {
    open: true,
    handleClose: () => alert("Ooops"),
    children: <Title>Hello</Title>
  }
};

export const ModalHidden: Story<ModalType> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Show modal</Button>
      <Modal open={isOpen} handleClose={() => setIsOpen(false)}>
        <Title>Hoolla</Title>
      </Modal>
    </div>
  );
};

ModalHidden.storyName = "Hidden";
