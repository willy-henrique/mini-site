import { Check, Heart } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const progress = [
  "Choppada",
  "Primeiro beijo",
  "Primeiro encontro",
  "Algumas histórias depois",
] as const;

export function StoryProgress() {
  return (
    <div className="story-progress-list">
      {progress.map((label, index) => (
        <Reveal key={label} delay={index * 0.08} className="story-progress-list__item">
          <span>{String(index + 1).padStart(2, "0")}</span><p>{label}</p><Check size={17} />
        </Reveal>
      ))}
      <Reveal delay={0.34} className="story-progress-list__item story-progress-list__item--current">
        <span>05</span><p>Em construção…</p><Heart size={17} fill="currentColor" />
      </Reveal>
    </div>
  );
}
