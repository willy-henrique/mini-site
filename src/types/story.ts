import type { LucideIcon } from "lucide-react";

export type PhotoMoment = "party" | "date" | "bar" | "final";

export interface StoryPhoto {
  id: number;
  src: string;
  alt: string;
  caption: string;
  moment: PhotoMoment;
  width: number;
  height: number;
  position?: string;
}

export interface QuizOption {
  id: string;
  label: string;
}

export interface QuizQuestionData {
  id: string;
  question: string;
  options: QuizOption[];
  correctOptionId: string;
  feedback: { correct: string; incorrect: string };
}

export interface TimelineMoment {
  id: string;
  label: string;
  eyebrow: string;
  description: string;
  icon: LucideIcon;
}
