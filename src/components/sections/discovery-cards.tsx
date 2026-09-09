"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Sparkle } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { discoveries } from "@/data/story";

export function DiscoveryCards() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="story-section discoveries">
      <div className="section-shell section-shell--narrow">
        <Reveal><p className="eyebrow">pesquisa de campo</p><h2 className="section-title">Algumas conclusões até agora…</h2></Reveal>
        <div className="discoveries__list">
          {discoveries.map((item, index) => {
            const isOpen = open === index;
            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className={`discovery-card ${isOpen ? "is-open" : ""}`}>
                  <button onClick={() => setOpen(isOpen ? null : index)} aria-expanded={isOpen} aria-controls={`discovery-${index}`}>
                    <span>{item.mark}</span><h3>{item.title}</h3><ChevronDown size={18} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div id={`discovery-${index}`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                        <p><Sparkle size={15} />{item.text}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
