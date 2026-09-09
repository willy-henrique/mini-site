import { Reveal } from "@/components/ui/reveal";

interface ChapterHeadingProps {
  number: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function ChapterHeading({ number, eyebrow, title, description, align = "left" }: ChapterHeadingProps) {
  return (
    <Reveal className={`chapter-heading ${align === "center" ? "text-center mx-auto" : ""}`}>
      <span className="chapter-watermark" aria-hidden="true">{number}</span>
      <div className="relative z-10">
        <p className="eyebrow">{eyebrow ?? `Capítulo ${number}`}</p>
        <h2 className="section-title">{title}</h2>
        {description ? <p className="section-description">{description}</p> : null}
      </div>
    </Reveal>
  );
}
