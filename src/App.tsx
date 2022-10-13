import { Variant_Color } from "./lib";
import UXButton from './lib/Button/Button';
import UXRow from './lib/Row/Row';
import UXColumn from "./lib/Column/Column";

function App() {
  const onClickes= (variant: string) => {
    console.log(`${variant} button clicked`);
  };

  return (
    <UXColumn alignItems="start">
      <UXRow alignItems="center" justifyContent="space-between">
        <UXButton variant={ Variant_Color.Primary } onClick={ () => onClickes(Variant_Color.Primary) }> Primary </UXButton>
        <UXButton variant={ Variant_Color.Success } onClick={ () => onClickes(Variant_Color.Success) }> Success </UXButton>
        <UXButton variant={ Variant_Color.Warning } onClick={ () => onClickes(Variant_Color.Warning) }> Warning </UXButton>
        <UXButton variant={ Variant_Color.Danger } onClick={ () => onClickes(Variant_Color.Danger) }> Danger </UXButton>
        <UXButton  onClick={ () => onClickes(Variant_Color.Danger) } disabled> Disabled </UXButton>
      </UXRow>

      <UXRow
        alignItems="center"
        justifyContent="center"
        fill
      >
        <UXButton variant={ Variant_Color.Primary } onClick={ () => onClickes(Variant_Color.Primary) }> Primary </UXButton>
      </UXRow>

      <UXRow
      alignItems="end"
      justifyContent="end"
      fill={false}
      >
      <UXButton variant={ Variant_Color.Primary } onClick={ () => onClickes(Variant_Color.Primary) }> Primary </UXButton>
      </UXRow>
    </UXColumn>
  )
}

export default App;