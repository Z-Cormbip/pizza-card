import MargheritaPizza from "./assets/MargheritaPizza";
import PepperoniPizza from "./assets/PepperoniPizza";

const App = () => {
  return (
    <main className="flex items-center justify-center pt-36 w-full">
      <div className="flex flex-col gap-36 md:flex-row ">
        <PepperoniPizza />
        <MargheritaPizza />
      </div>
    </main>
  );
};
export default App;