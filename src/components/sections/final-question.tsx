"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Heart } from "lucide-react";
import { useState, type MouseEvent } from "react";
import { launchConfetti } from "@/components/effects/confetti-effect";
import { SoftButton } from "@/components/ui/soft-button";
import { canDecline, nextDodgeOffset } from "@/lib/interactions";

type Answer = "yes" | "no";

export function FinalQuestion() {
  const [attempts, setAttempts] = useState(0);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [answer, setAnswer] = useState<Answer | null>(null);

  const chooseYes = async () => {
    setAnswer("yes");
    await launchConfetti();
  };

  const chooseNo = (event: MouseEvent<HTMLButtonElement>) => {
    const triggeredByKeyboard = event.detail === 0;
    if (triggeredByKeyboard || canDecline(attempts)) {
      setAnswer("no");
      return;
    }
    event.preventDefault();
    setOffset(nextDodgeOffset(attempts));
    setAttempts((value) => value + 1);
  };

  return (
    <div className="final-question">
      <AnimatePresence mode="wait">
        {!answer ? (
          <motion.div key="question" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -10 }}>
            <p className="eyebrow">última pergunta…</p>
            <h2>Você toparia viver mais alguns capítulos comigo?</h2>
            <div className="final-question__buttons">
              <SoftButton onClick={chooseYes}>Com certeza <Heart size={17} fill="currentColor" /></SoftButton>
              <motion.div animate={{ x: offset.x, y: offset.y }} transition={{ type: "spring", stiffness: 420, damping: 24 }}>
                <SoftButton variant="secondary" onClick={chooseNo}>Não</SoftButton>
              </motion.div>
            </div>
            {attempts > 0 ? <span className="final-question__tease">{attempts === 1 ? "Opa, quase. 😌" : "Tá bom, na próxima eu deixo."}</span> : null}
          </motion.div>
        ) : (
          <motion.div key="answer" className="final-answer" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
            <span className="final-answer__icon"><Check size={24} /></span>
            <p>{answer === "yes" ? "Resposta registrada com sucesso." : "Resposta registrada para análise. 🤨"}</p>
            <h2>Então acho que essa história ainda está só começando.</h2>
            <Heart className="final-answer__heart" fill="currentColor" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
