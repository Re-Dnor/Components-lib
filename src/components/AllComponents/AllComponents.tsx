import { Variant_Color } from "../../lib";
import Button from "../../lib/Button/Button";
import Row from "../../lib/Row/Row";
import Box from "../../lib/Box/Box";
import Input from "../../lib/Input/Input";
import Close from "../../lib/Close/Close";

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
