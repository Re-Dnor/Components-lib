import React from "react";
import { Variant_Color } from "./lib";
import Button from "./lib/Button/Button";
import Row from "./lib/Row/Row";
import Column from "./lib/Column/Column";

function App() {
  const onClickes= (variant: string) => {
    console.log(`${variant} button clicked`);
  };

  return (
    <Column alignItems="start">
      <Row alignItems="center" justifyContent="space-between">
        <Button variant={ Variant_Color.Primary } onClick={ () => onClickes(Variant_Color.Primary) }> Primary </Button>
        <Button variant={ Variant_Color.Success } onClick={ () => onClickes(Variant_Color.Success) }> Success </Button>
        <Button variant={ Variant_Color.Warning } onClick={ () => onClickes(Variant_Color.Warning) }> Warning </Button>
        <Button variant={ Variant_Color.Danger } onClick={ () => onClickes(Variant_Color.Danger) }> Danger </Button>
        <Button  onClick={ () => onClickes(Variant_Color.Danger) } disabled> Disabled </Button>
      </Row>

      <Row
        alignItems="center"
        justifyContent="center"
        fill
      >
        <Button
        variant={ Variant_Color.Primary }
        onClick={ () => onClickes(Variant_Color.Primary) }
        size="large"
        >
          Primary
        </Button>
      </Row>

      <Row
        alignItems="center"
        justifyContent="center"
        fill
      >
        <Button
        variant={ Variant_Color.Primary }
        onClick={ () => onClickes(Variant_Color.Primary) }
        size="medium"
        >
          Primary
        </Button>
      </Row>

      <Row
        alignItems="center"
        justifyContent="center"
        fill
      >
        <Button
        variant={ Variant_Color.Primary }
        onClick={ () => onClickes(Variant_Color.Primary) }
        size="small"
        >
          Primary
        </Button>
      </Row>

    </Column>
  );
}

export default App;