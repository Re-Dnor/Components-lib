import { Variant_Color } from "./lib";
import UXButton from './lib/Button/Button';

function App() {
  const onClickes= (variant: string) => {
    console.log(`${variant} button clicked`);
  };

  return (
    <>
      <UXButton variant={ Variant_Color.Primary } onClick={ () => onClickes(Variant_Color.Primary) }> Primary </UXButton>
      <UXButton variant={ Variant_Color.Success } onClick={ () => onClickes(Variant_Color.Success) }> Success </UXButton>
      <UXButton variant={ Variant_Color.Warning } onClick={ () => onClickes(Variant_Color.Warning) }> Warning </UXButton>
      <UXButton variant={ Variant_Color.Danger } onClick={ () => onClickes(Variant_Color.Danger) }> Danger </UXButton>
      <UXButton  onClick={ () => onClickes(Variant_Color.Danger) } disabled> Disabled </UXButton>
    </>
  )
}

export default App;