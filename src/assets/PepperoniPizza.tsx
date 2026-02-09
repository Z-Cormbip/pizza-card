import PepperoniSvg from "./illustrations/pepperoni-slice.svg?react";
import PizzaCard from "./components/PizzaCard";
import { PepperoniInfo } from "./components/MoreInfo";

const PepperoniPizza = () => {
  return (
    <PizzaCard
      pizzaFlavor="Pepperoni"
      InfoComponent={PepperoniInfo}
      Illustration={PepperoniSvg}
    />
  );
};

export default PepperoniPizza;
