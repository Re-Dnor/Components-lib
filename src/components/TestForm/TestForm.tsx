import React from "react";
import { Box, Title, Row, Input, MultiText, Button } from "../../lib/index";

function TestForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert("Hue-hue");
  };
  return (
    <Box justifyContent="start" alignItems="center" component="form" onSubmit={handleSubmit}>
      <Title>Test form</Title>
      <Row gap justifyContent="center">
        <Input label="First name" name="firstName" required />
        <Input label="Last name" name="lastName" required />
      </Row>
      <Row justifyContent="center">
        <Input label="Email" name="email" type="email" required />
      </Row>
      <Row justifyContent="center">
        <Input label="Login" name="login" required />
      </Row>
      <Row justifyContent="center">
        <Input label="Password" name="password" type="password" required />
      </Row>
      <Row justifyContent="center">
        <Input label="Password confirm" name="confirm" type="password" required />
      </Row>
      <Row justifyContent="center">
        <MultiText placeholder="Lorem ipsum test test" height={5}></MultiText>
      </Row>
      <Button type="submit">Test sign up</Button>
    </Box>
  );
}

export default TestForm;
