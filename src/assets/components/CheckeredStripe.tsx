import { forwardRef } from "react";

interface CheckeredStripeProps {
  squareSize?: number;
  color?: string;
  opacity?: number;
  className?: string;
}

export const CheckeredStripe = forwardRef<SVGSVGElement, CheckeredStripeProps>(
  (
    { squareSize = 20, color = "currentColor", opacity = 0.2, className = "" },
    svgRef,
  ) => {
    const patternSize = squareSize * 2;

    return (
      <div
        className={`pointer-events-none absolute w-full inset-0 overflow-hidden ${className}`}
      >
        <svg
          ref={svgRef}
          className="checkered-stripe-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="checkered-stripe"
              x="0"
              y="0"
              width={patternSize}
              height={patternSize}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width={squareSize}
                height={squareSize}
                fill={color}
                opacity={opacity}
              />
              <rect
                x={squareSize}
                y={squareSize}
                width={squareSize}
                height={squareSize}
                fill={color}
                opacity={opacity}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#checkered-stripe)" />
        </svg>
      </div>
    );
  },
);

CheckeredStripe.displayName = "CheckeredStripe";
