"use client";
import { useEffect, useRef, useState } from "react";
import { formatNumber } from "@/lib/utils";

interface ImpactCounterProps {
  label: string;
  value: number;
  unit: string;
  icon: string;
}

export default function ImpactCounter({ label, value, unit, icon }: ImpactCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1500;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, value]);

  return (
    <div ref={ref} className="bg-surface-dark rounded-2xl p-5 text-center">
      <div className="text-2xl sm:text-3xl font-extrabold text-text-inverse font-[family-name:var(--font-heading)] mb-1">
        {formatNumber(count)}
      </div>
      <div className="text-[10px] font-bold uppercase tracking-wider text-secondary mb-1">{unit}</div>
      <div className="text-xs text-text-inverse/70 leading-tight">{label}</div>
    </div>
  );
}
