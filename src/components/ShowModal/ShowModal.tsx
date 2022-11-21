import { useState } from "react";
import { Box, Button, Modal, Row, Title } from "../../lib/index";

function ShowModal() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);

  return (
    <Box>
      <Row>
        <Button onClick={() => setShowModal1(true)}>Test button 1</Button>
      </Row>
      <Row>
        <Button onClick={() => setShowModal2(true)} color="danger">
          Test button2
        </Button>
      </Row>
      <Row>
        <Button onClick={() => setShowModal3(true)} color="success">
          Test button3
        </Button>
      </Row>
      <Row>
        <Button onClick={() => setShowModal4(true)} color="warning">
          Test button4
        </Button>
      </Row>

      <Modal open={showModal1} handleClose={setShowModal1}>
        <Box alignItems="center">
          <Title>Hello</Title>
        </Box>
      </Modal>
      <Modal open={showModal2} handleClose={setShowModal2}>
        <Box alignItems="center">
          <Title>Hello2</Title>
        </Box>
      </Modal>
      <Modal open={showModal3} handleClose={setShowModal3}>
        <Box alignItems="center">
          <Title>Hello3</Title>
        </Box>
      </Modal>
      <Modal open={showModal4} handleClose={setShowModal4}>
        <Box alignItems="center">
          <Title>Hello4</Title>
        </Box>
      </Modal>
    </Box>
  );
}

export default ShowModal;
