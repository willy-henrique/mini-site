"use client";

import { chapters } from "@/data/story";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

export function ProgressNavigation() {
  const progress = useScrollProgress();
  return (
    <>
      <div className="story-progress" aria-hidden="true">
        <div style={{ transform: `scaleX(${progress})` }} />
      </div>
      <nav className="chapter-nav" aria-label="Capítulos da história">
        {chapters.map((chapter) => (
          <a key={chapter.id} href={`#${chapter.id}`} aria-label={`${chapter.number}: ${chapter.label}`}>
            <span>{chapter.number}</span>
            <i />
            <small>{chapter.label}</small>
          </a>
        ))}
      </nav>
    </>
  );
}
