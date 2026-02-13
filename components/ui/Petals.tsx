import { cn } from "../../lib/utils";

type PetalAccentProps = {
  className?: string;
  tone?: "pink" | "blush";
  density?: "sparse" | "cluster";
};

const petalColor: Record<NonNullable<PetalAccentProps["tone"]>, string> = {
  pink: "#E52387",
  blush: "#FDECF4"
};

export function PetalAccent({
  className,
  tone = "pink",
  density = "sparse"
}: PetalAccentProps) {
  const petals = density === "cluster" ? 8 : 5;

  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("absolute pointer-events-none select-none", className)}
      aria-hidden="true"
    >
      {[...Array(petals)].map((_, index) => {
        const angle = (360 / petals) * index;
        const scale = density === "cluster" ? 0.7 + index * 0.05 : 0.6;
        const opacity = density === "cluster" ? 0.35 + index * 0.05 : 0.4;

        return (
          <g
            key={index}
            transform={`translate(100 100) rotate(${angle}) scale(${scale})`}
            opacity={opacity}
          >
            <path
              d="M0 -45 C12 -30 14 -8 0 12 C-14 -8 -12 -30 0 -45Z"
              fill={petalColor[tone]}
            />
          </g>
        );
      })}
    </svg>
  );
}


