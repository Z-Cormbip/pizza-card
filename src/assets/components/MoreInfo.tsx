import { TriangleAlert } from "lucide-react";

interface MoreInfoProps {
  className?: string;
  ingredients: string[];
}

export const MoreInfo = ({ className, ingredients }: MoreInfoProps) => {
  return (
    <div className={`flex flex-col gap-14 ${className}`}>
      <ul className="*:text-[#e0e0da] text-xl flex flex-col gap-1 list-disc list-inside">
        {ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient}</li>
        ))}
      </ul>
      <div className="flex gap-2 items-center">
        <TriangleAlert className="stroke-primary fill-accent" />
        <p className="text-accent text-xs italic">
          Our food contains allergens
        </p>
      </div>
    </div>
  );
};

export const PepperoniInfo = () => (
  <MoreInfo
    ingredients={[
      "Pizza dough",
      "Tomato Sauce",
      "Mozzarella Cheese",
      "Pepperoni Slices",
    ]}
  />
);

export const MargheritaInfo = () => (
  <MoreInfo
    ingredients={[
      "Pizza dough",
      "Tomato Sauce",
      "Fresh Mozzarella",
      "Basil Leaves",
    ]}
  />
);
