import { Variant_Color } from "./lib";
import Button from "./lib/Button/Button";
import Row from "./lib/Row/Row";
import Column from "./lib/Column/Column";
import Input from "./lib/Input/Input";
import Close from "./lib/Close/Close";

function App() {
  const onClickes = (variant: string) => {
    console.log(`${variant} button clicked`);
  };

  return (
    <Column alignItems="center" justifyContent="center">
      <Row alignItems="center" justifyContent="center" fill gap>
        <Button variant={Variant_Color.Primary} onClick={() => onClickes(Variant_Color.Primary)}>
          {" "}
          Primary{" "}
        </Button>
        <Button variant={Variant_Color.Success} onClick={() => onClickes(Variant_Color.Success)}>
          {" "}
          Success{" "}
        </Button>
        <Button variant={Variant_Color.Warning} onClick={() => onClickes(Variant_Color.Warning)}>
          {" "}
          Warning{" "}
        </Button>
        <Button variant={Variant_Color.Danger} onClick={() => onClickes(Variant_Color.Danger)}>
          {" "}
          Danger{" "}
        </Button>
        <Button onClick={() => onClickes(Variant_Color.Danger)} disabled>
          {" "}
          Disabled{" "}
        </Button>
      </Row>
      <Row fill gap justifyContent="center">
        <Input name="login" label="Login" />
        <Input name="email" label="Email" />
      </Row>
      <Input name="holla" label="HUEHUE" />
      <Input name="holla" label="HUEHUE" />
      <Close color="primary" />
      <Close color="primary" />
    </Column>
  );
}

export default App;
