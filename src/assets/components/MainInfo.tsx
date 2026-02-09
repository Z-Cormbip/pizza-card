interface MainInfoProps {
  className?: string;
  pizzaFlavor: string;
}

const MainInfo = ({ className, pizzaFlavor }: MainInfoProps) => {
  return (
    <div className={`flex flex-col gap-14 mb-4 z-1 ${className} items-center`}>
      <div className="bg-secondary w-fit items-center justify-center rounded-full px-4 py-1 self-end text-primary text-3xl">
        <h2>$5.00</h2>
      </div>
      <div className="text-primary text-4xl">
        <h1>{pizzaFlavor}</h1>
      </div>
    </div>
  );
};
export default MainInfo;
