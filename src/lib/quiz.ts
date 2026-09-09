import type { QuizQuestionData } from "@/types/story";

export type QuizAnswers = Record<string, string>;

export function calculateQuizScore(questions: QuizQuestionData[], answers: QuizAnswers): number {
  return questions.reduce(
    (score, question) => score + (answers[question.id] === question.correctOptionId ? 1 : 0),
    0,
  );
}

export function isQuizComplete(questions: QuizQuestionData[], answers: QuizAnswers): boolean {
  return questions.every((question) => Boolean(answers[question.id]));
}
