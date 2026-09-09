import { describe, expect, it } from "vitest";
import { quizQuestions } from "@/data/quiz";
import { calculateQuizScore, isQuizComplete } from "@/lib/quiz";

describe("quiz", () => {
  it("calcula uma pontuação completa", () => {
    const answers = Object.fromEntries(quizQuestions.map((question) => [question.id, question.correctOptionId]));
    expect(calculateQuizScore(quizQuestions, answers)).toBe(5);
    expect(isQuizComplete(quizQuestions, answers)).toBe(true);
  });

  it("permite finalizar mesmo com respostas incorretas", () => {
    const answers = Object.fromEntries(quizQuestions.map((question) => [question.id, question.options[0].id]));
    expect(isQuizComplete(quizQuestions, answers)).toBe(true);
    expect(calculateQuizScore(quizQuestions, answers)).toBeLessThan(5);
  });
});
