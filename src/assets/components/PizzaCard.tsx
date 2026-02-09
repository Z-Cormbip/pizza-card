import { CheckeredStripe } from "./CheckeredStripe";
import { useLayoutEffect, useRef, useState } from "react";
import MainInfo from "./MainInfo";
import gsap from "gsap";

interface PizzaCardProps {
  pizzaFlavor: string;
  InfoComponent?: React.ComponentType;
  Illustration: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const PizzaCard = ({
  pizzaFlavor,
  InfoComponent,
  Illustration,
}: PizzaCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const stripeRef = useRef<SVGSVGElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  const handleHover = (isHovering: boolean) => {
    setIsHovered(isHovering);
    if (isHovering) {
      tl.current?.play();
    } else {
      tl.current?.pause(0);
    }
  };

  useLayoutEffect(() => {
    if (!stripeRef.current || !cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(stripeRef.current, { x: "-50%" });
      gsap.set(cardRef.current, { scale: "1", transformOrigin: "center" });

      tl.current = gsap.timeline({
        paused: true,
      });

      tl.current
        .to(cardRef.current, {
          scale: "1.05",
          duration: 0.3,
          ease: "power2.inOut",
        })
        .fromTo(
          stripeRef.current,
          { x: "-50%" },
          { x: "0%", duration: 20, ease: "none" },
          "<",
        );
    }, cardRef);

    return () => {
      tl.current?.kill();
      tl.current = null;
      ctx.revert();
    };
  }, []);

  return (
    <div ref={cardRef} className="hover:cursor-pointer w-full max-w-75 mx-auto">
      <div
        className={`group flex flex-col ${
          isHovered
            ? "bg-primary border-shadow after:bg-shadow "
            : "bg-secondary border-primary after:bg-primary"
        } card-brutal relative`}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        <MainInfo
          pizzaFlavor={pizzaFlavor}
          className="*:group-hover:last:text-secondary"
        />
        <CheckeredStripe
          ref={stripeRef}
          color="#fffef6"
          squareSize={32}
          className="h-24 rounded-t-xl"
        />
        {isHovered && InfoComponent && <InfoComponent />}
        <Illustration className="w-41.75 h-auto absolute -top-12 -left-9" />
      </div>
    </div>
  );
};

export default PizzaCard;
