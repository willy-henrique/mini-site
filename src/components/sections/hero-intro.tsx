"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { AmbientLights } from "@/components/effects/ambient-lights";
import { SoftButton } from "@/components/ui/soft-button";
import { MusicCard } from "@/components/timeline/music-card";
import { story } from "@/data/story";
import { useReducedMotionSafe } from "@/hooks/use-reduced-motion-safe";

const introLines = [
  "Tudo começou numa choppada…",
  "Duas pessoas.",
  "Muitos olhares.",
  "E absolutamente nenhuma coragem de chegar uma na outra. 😂",
];

export function HeroIntro() {
  const [started, setStarted] = useState(false);
  const [visibleLines, setVisibleLines] = useState(1);
  const reducedMotion = useReducedMotionSafe();

  useEffect(() => {
    if (reducedMotion) {
      const timer = window.setTimeout(() => setVisibleLines(introLines.length), 0);
      return () => window.clearTimeout(timer);
    }
    const timers = introLines.slice(1).map((_, index) =>
      window.setTimeout(() => setVisibleLines(index + 2), 900 * (index + 1)),
    );
    return () => timers.forEach(window.clearTimeout);
  }, [reducedMotion]);

  const startStory = () => {
    setStarted(true);
    window.setTimeout(() => document.querySelector("#choppada")?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" }), 280);
  };

  return (
    <header id="inicio" className="hero-intro">
      <AmbientLights interactive />
      <div className="hero-intro__grain" aria-hidden="true" />
      <motion.div className="hero-intro__content" animate={started ? { opacity: 0.22, scale: 0.98 } : { opacity: 1, scale: 1 }}>
        <div className="hero-intro__label"><Sparkles size={14} /> arquivo de uma noite que rendeu</div>
        <div className="hero-intro__lines" aria-live="polite">
          <AnimatePresence>
            {visibleLines >= 1 ? (
              <motion.h1
                className="hero-intro__lead"
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: reducedMotion ? 0 : 0.75 }}
              >
                {introLines[0]}
              </motion.h1>
            ) : null}
            {introLines.slice(1, visibleLines).map((line) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: reducedMotion ? 0 : 0.75 }}
              >
                {line}
              </motion.p>
            ))}
          </AnimatePresence>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: visibleLines === introLines.length ? 1 : 0 }} transition={{ delay: reducedMotion ? 0 : 0.45 }}>
          <SoftButton onClick={startStory} disabled={visibleLines < introLines.length}>
            Começar nossa história <ArrowDown size={17} />
          </SoftButton>
          <div className="chapter-soundtrack chapter-soundtrack--hero"><MusicCard track={story.soundtracks.intro} compact /></div>
        </motion.div>
      </motion.div>
      <span className="hero-intro__scroll" aria-hidden="true">role para descobrir</span>
    </header>
  );
}
