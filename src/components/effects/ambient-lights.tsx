"use client";

import { useEffect, useRef } from "react";

export function AmbientLights({ interactive = false }: { interactive?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!interactive) return;
    const node = ref.current;
    const handlePointer = (event: PointerEvent) => {
      node?.style.setProperty("--pointer-x", `${event.clientX}px`);
      node?.style.setProperty("--pointer-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", handlePointer, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointer);
  }, [interactive]);

  return (
    <div ref={ref} className="ambient-lights" aria-hidden="true">
      <span className="light-orb light-orb--wine" />
      <span className="light-orb light-orb--gold" />
      <span className="light-orb light-orb--rose" />
      {Array.from({ length: 18 }, (_, index) => (
        <i key={index} className="party-speck" style={{ "--i": index } as React.CSSProperties} />
      ))}
    </div>
  );
}
