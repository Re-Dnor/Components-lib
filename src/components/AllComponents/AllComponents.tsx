import { Box, Row, Button, Input, Close } from "../../lib/index";
import { Variant_Color } from "../../lib/types/Button.types";

function AllComponents() {
  return (
    <Box alignItems="center" justifyContent="center">
      <Row alignItems="center" justifyContent="center" gap>
        <Button variant={Variant_Color.Primary}> Primary </Button>
        <Button variant={Variant_Color.Success}> Success </Button>
        <Button variant={Variant_Color.Warning}> Warning </Button>
        <Button variant={Variant_Color.Danger}> Danger </Button>
        <Button disabled> Disabled </Button>
      </Row>
      <Row gap justifyContent="center">
        <Input name="login" label="Login" />
        <Input name="email" label="Email" />
      </Row>
      <Input name="holla" label="HUEHUE" />
      <Input name="holla" label="HUEHUE" />
      <Close color="primary" />
      <Close color="primary" />
    </Box>
  );
}

export default AllComponents;
