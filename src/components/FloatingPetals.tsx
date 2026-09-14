"use client";

import { useMemo } from "react";

/**
 * Gentle drifting rose petals rendered over the whole page.
 * Pure CSS animation — no images, low opacity, non-interactive.
 */
export default function FloatingPetals() {
  const petals = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => {
        const left = Math.random() * 100;
        const duration = 14 + Math.random() * 14;
        const delay = -Math.random() * 24;
        const size = 12 + Math.random() * 16;
        const sway = 30 + Math.random() * 60;
        const tone = i % 3;
        return { id: i, left, duration, delay, size, sway, tone };
      }),
    []
  );

  return (
    <div className="petals-layer" aria-hidden="true" data-testid="petals-layer">
      {petals.map((p) => (
        <span
          key={p.id}
          className={`petal petal-tone-${p.tone}`}
          style={
            {
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
              ["--sway" as string]: `${p.sway}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
