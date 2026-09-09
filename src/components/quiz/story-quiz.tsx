"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronRight, RotateCcw, Trophy } from "lucide-react";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SoftButton } from "@/components/ui/soft-button";
import { quizQuestions } from "@/data/quiz";
import { calculateQuizScore, type QuizAnswers } from "@/lib/quiz";

const storageKey = "nossa-historia-quiz";

export function StoryQuiz() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let timer: number | undefined;
    try {
      const saved = window.localStorage.getItem(storageKey);
      if (saved) timer = window.setTimeout(() => setAnswers(JSON.parse(saved) as QuizAnswers), 0);
    } catch { /* Storage is optional. */ }
    return () => window.clearTimeout(timer);
  }, []);

  const question = quizQuestions[index];
  const selected = answers[question.id];
  const score = calculateQuizScore(quizQuestions, answers);

  const answer = (optionId: string) => {
    const updated = { ...answers, [question.id]: optionId };
    setAnswers(updated);
    try { window.localStorage.setItem(storageKey, JSON.stringify(updated)); } catch { /* Storage is optional. */ }
  };

  const advance = () => {
    if (index === quizQuestions.length - 1) setFinished(true);
    else setIndex((value) => value + 1);
  };

  const restart = () => {
    setAnswers({}); setIndex(0); setFinished(false);
    try { window.localStorage.removeItem(storageKey); } catch { /* Storage is optional. */ }
  };

  return (
    <section className="story-section quiz-section">
      <div className="section-shell section-shell--narrow">
        <Reveal><p className="eyebrow">valendo absolutamente nada</p><h2 className="section-title">Será que você lembra?</h2></Reveal>
        <Reveal className="quiz-card">
          <AnimatePresence mode="wait">
            {!finished ? (
              <motion.div key={question.id} initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }}>
                <div className="quiz-card__progress"><span>{String(index + 1).padStart(2, "0")}</span><div><i style={{ transform: `scaleX(${(index + 1) / quizQuestions.length})` }} /></div><small>{quizQuestions.length}</small></div>
                <fieldset>
                  <legend>{question.question}</legend>
                  <div className="quiz-card__options">
                    {question.options.map((option) => (
                      <button key={option.id} onClick={() => answer(option.id)} className={selected === option.id ? "is-selected" : ""} aria-pressed={selected === option.id}>
                        <span>{option.label}</span>{selected === option.id ? <Check size={16} /> : null}
                      </button>
                    ))}
                  </div>
                </fieldset>
                <AnimatePresence>
                  {selected ? (
                    <motion.div className="quiz-card__feedback" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} role="status">
                      <p>{selected === question.correctOptionId ? question.feedback.correct : question.feedback.incorrect}</p>
                      <SoftButton onClick={advance}>{index === quizQuestions.length - 1 ? "ver resultado" : "próxima"}<ChevronRight size={16} /></SoftButton>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div key="result" className="quiz-result" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}>
                <div className="quiz-result__trophy"><Trophy size={35} /></div>
                <span>resultado</span><strong>{score}/{quizQuestions.length}</strong>
                <h3>{score >= 4 ? "Parabéns." : "Quase lá."}</h3>
                <p>{score >= 4 ? "Você aparentemente prestou atenção na nossa própria história. 🏆" : "Acho que vamos precisar criar mais memórias para você treinar. 😂"}</p>
                <SoftButton variant="ghost" onClick={restart}><RotateCcw size={16} /> refazer</SoftButton>
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
