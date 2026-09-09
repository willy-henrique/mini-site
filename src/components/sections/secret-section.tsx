"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Eye, LockKeyhole, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SoftButton } from "@/components/ui/soft-button";
import { MusicCard } from "@/components/timeline/music-card";
import { story } from "@/data/story";

export function SecretSection() {
  const [unlocked, setUnlocked] = useState(false);
  const [secretTaps, setSecretTaps] = useState(0);
  const tooCurious = secretTaps >= 4;

  return (
    <section className="secret-section" aria-labelledby="secret-title">
      <div className="section-shell section-shell--narrow">
        <Reveal className="secret-section__intro"><p>Depois do cinema…</p><h2 id="secret-title">Próxima parada…</h2></Reveal>
        <Reveal className={`secret-file ${unlocked ? "is-unlocked" : ""}`}>
          <button className="secret-file__classification" onClick={() => setSecretTaps((value) => value + 1)} aria-label="Classificação Top Secret. Há um segredo escondido aqui.">
            TOP SECRET
          </button>
          <AnimatePresence mode="wait">
            {!unlocked ? (
              <motion.div key="locked" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 0.96 }} className="secret-file__locked">
                <LockKeyhole size={38} />
                <div className="redacted" aria-hidden="true"><i /><i /><i /></div>
                <h3>ARQUIVO CONFIDENCIAL</h3>
                <p>Parte protegida por sigilo.</p>
                <SoftButton onClick={() => setUnlocked(true)}>Desbloquear <Eye size={17} /></SoftButton>
              </motion.div>
            ) : (
              <motion.div key="unlocked" initial={{ opacity: 0, filter: "blur(12px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} className="secret-file__unlocked">
                <ShieldCheck size={38} />
                <span>ACESSO PARCIALMENTE AUTORIZADO</span>
                <h3>Os acontecimentos seguintes foram removidos por motivos de privacidade.</h3>
                <p>Essa parte da história não está disponível para o público. 😏</p>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>{tooCurious ? <motion.p className="secret-file__easter" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>Curiosa demais você. 😏</motion.p> : null}</AnimatePresence>
        </Reveal>
        <div className="chapter-soundtrack"><MusicCard track={story.soundtracks.secret} compact /></div>
      </div>
    </section>
  );
}
