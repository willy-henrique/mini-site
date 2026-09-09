"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronRight, Heart, Terminal, X } from "lucide-react";
import { useState } from "react";
import { ChapterHeading } from "@/components/ui/chapter-heading";
import { Reveal } from "@/components/ui/reveal";
import { SoftButton } from "@/components/ui/soft-button";
import { MusicCard } from "@/components/timeline/music-card";
import { story } from "@/data/story";

type Choice = "friend" | "you";

export function PickupChapter() {
  const [choice, setChoice] = useState<Choice | null>(null);

  return (
    <section id="coragem" className="story-section pickup-chapter">
      <div className="section-shell section-shell--narrow">
        <ChapterHeading number="02" title="A coragem apareceu. Do meu jeito." description="Depois de muito olhar de longe, finalmente fui falar com vocês duas." />

        <Reveal className="approach-story">
          <p>Cheguei em você e na sua amiga e, com a maior naturalidade que consegui fingir, perguntei:</p>
          <blockquote>“{story.approachLine}”</blockquote>
          <span>Sim. Esse foi oficialmente o meu plano de entrada. 😂</span>
        </Reveal>

        <Reveal className="terminal-card">
          <div className="terminal-card__bar">
            <div><i /><i /><i /></div>
            <span>cantada.exe</span>
            <Terminal size={15} />
          </div>
          <div className="terminal-card__body">
            <p><span>&gt;</span> preparando coragem...</p>
            <p><span>&gt;</span> selecionando alvo: <b>você</b></p>
            <p><span>&gt;</span> “{story.pickupLine}”</p>
            <motion.p className="terminal-card__success" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8 }} viewport={{ once: true }}>
              ✓ cantada.exe executada com sucesso.
            </motion.p>
          </div>
          <p className="terminal-card__note">A cantada original pode ser colocada em <code>src/data/story.ts</code>.</p>
        </Reveal>
        <div className="chapter-soundtrack"><MusicCard track={story.soundtracks.pickup} compact /></div>

        <Reveal className="friend-twist">
          <p>E por algum motivo…</p>
          <h3>você ainda tentou me empurrar pra sua amiga.</h3>
          <span aria-hidden="true">🤨</span>
        </Reveal>

        <Reveal className="choice-game">
          <p className="eyebrow">checagem rápida</p>
          <h3>Quem você acha que eu queria naquela noite?</h3>
          <div className="choice-game__buttons">
            <SoftButton variant="secondary" onClick={() => setChoice("friend")} aria-pressed={choice === "friend"}>
              Sua amiga
            </SoftButton>
            <motion.div animate={choice === "friend" ? { scale: [1, 1.06, 1] } : undefined}>
              <SoftButton onClick={() => setChoice("you")} aria-pressed={choice === "you"}>
                Você <Heart size={16} fill="currentColor" />
              </SoftButton>
            </motion.div>
          </div>
          <AnimatePresence mode="wait">
            {choice ? (
              <motion.div key={choice} className={`choice-game__feedback choice-game__feedback--${choice}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} role="status">
                {choice === "friend" ? <X size={18} /> : <Check size={18} />}
                <span>{choice === "friend" ? "Resposta incorreta. Eu já tinha escolhido você." : "Finalmente alguém entendeu."}</span>
              </motion.div>
            ) : null}
          </AnimatePresence>
          {choice ? (
            <SoftButton variant="ghost" className="choice-game__continue" onClick={() => document.querySelector("#beijo")?.scrollIntoView({ behavior: "smooth" })}>
              continuar a história <ChevronRight size={16} />
            </SoftButton>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
