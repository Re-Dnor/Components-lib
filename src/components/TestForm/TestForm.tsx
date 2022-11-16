import Box from "../../lib/Box/Box";
import Row from "../../lib/Row/Row";
import Input from "../../lib/Input/Input";
import Button from "../../lib/Button/Button";
import Title from "../../lib/Title/Title";

function TestForm() {
  return (
    <Box justifyContent="start" alignItems="center">
      <Title>Test form</Title>
      <Row gap justifyContent="center">
        <Input label="First name" name="firstName" />
        <Input label="Last name" name="lastName" />
      </Row>
      <Row justifyContent="center">
        <Input label="Email" name="email" />
      </Row>
      <Row justifyContent="center">
        <Input label="Login" name="login" />
      </Row>
      <Row justifyContent="center">
        <Input label="Password" name="password" />
      </Row>
      <Row justifyContent="center">
        <Input label="Password confirm" name="confirm" />
      </Row>
      <Button onClick={() => alert("Huehue")}>Test sign up</Button>
    </Box>
  );
}

export default TestForm;
