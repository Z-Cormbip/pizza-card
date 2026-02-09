import MargheritaSvg from "./illustrations/margherita-slice.svg?react";
import PizzaCard from "./components/PizzaCard";
import { MargheritaInfo } from "./components/MoreInfo";

const MargheritaPizza = () => {
  return (
    <PizzaCard
      pizzaFlavor="Margherita"
      InfoComponent={MargheritaInfo}
      Illustration={MargheritaSvg}
    />
  );
};

export default MargheritaPizza;
