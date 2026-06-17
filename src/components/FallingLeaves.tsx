"use client";

const SHAPES = [
  `M11 1C11 1 2 5 2 12C2 16 5 20 11 21C17 20 20 16 20 12C20 5 11 1 11 1Z`,
  `M11 1C11 1 5 8 5 14C5 18 8 21 11 21C14 21 17 18 17 14C17 8 11 1 11 1Z`,
  `M11 2C7 2 3 7 3 12C3 17 7 21 11 21C15 21 19 17 19 12C19 7 15 2 11 2Z`,
];

interface LeafConfig {
  id: number;
  shape: string;
  left: string;
  duration: string;
  delay: string;
  opacity: number;
  color: string;
  size: number;
}

const LEAVES: LeafConfig[] = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  shape: SHAPES[i % 3],
  left: `${(i * 7.2 + 2) % 100}%`,
  duration: `${8 + (i * 1.7) % 7}s`,
  delay: `${-(i * 1.3) % 10}s`,
  opacity: 0.1 + (i % 5) * 0.04,
  color: i % 3 === 0 ? "#A8C96E" : i % 3 === 1 ? "#1B5E37" : "#0F3D22",
  size: 18 + (i % 4) * 4,
}));

export default function FallingLeaves() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {LEAVES.map((leaf) => (
        <span
          key={leaf.id}
          className="leaf absolute"
          style={{
            left: leaf.left,
            animationDuration: `${leaf.duration}, ${parseFloat(leaf.duration) * 0.7}s`,
            animationDelay: `${leaf.delay}, ${leaf.delay}`,
            ["--leaf-opacity" as string]: leaf.opacity,
          }}
        >
          <svg
            width={leaf.size}
            height={leaf.size}
            viewBox="0 0 22 22"
            fill="none"
          >
            <path d={leaf.shape} fill={leaf.color} />
            <path d="M11 5V19" stroke={leaf.color} strokeWidth="0.5" opacity="0.5" />
          </svg>
        </span>
      ))}
    </div>
  );
}
