import React, { useId } from "react";
import { cn } from "@/lib/utils";

interface LiquidSignalProps {
  className?: string;
  inverse?: boolean;
}

const LiquidSignal: React.FC<LiquidSignalProps> = ({ className, inverse = false }) => {
  const filterId = useId().replace(/:/g, "");
  const color = inverse ? "#c7f36b" : "#3346f5";

  return (
    <svg aria-hidden="true" className={cn("pointer-events-none select-none", className)} viewBox="0 0 220 220" role="presentation">
      <defs>
        <filter id={filterId} x="-35%" y="-35%" width="170%" height="170%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
      <g filter={`url(#${filterId})`} fill={color}>
        <circle className="liquid-blob-primary" cx="88" cy="105" r="58" />
        <circle className="liquid-blob-secondary" cx="145" cy="92" r="42" />
        <circle cx="137" cy="148" r="29" opacity="0.92" />
      </g>
      <circle cx="159" cy="45" r="7" fill={color} />
    </svg>
  );
};

export default LiquidSignal;
