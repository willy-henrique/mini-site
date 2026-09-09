"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { ChapterHeading } from "@/components/ui/chapter-heading";
import { Reveal } from "@/components/ui/reveal";
import { SoftButton } from "@/components/ui/soft-button";
import { MusicCard } from "@/components/timeline/music-card";
import { story } from "@/data/story";
import { useReducedMotionSafe } from "@/hooks/use-reduced-motion-safe";

export function PartyChapter() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [gaze, setGaze] = useState({ x: 0, y: 0 });
  const reducedMotion = useReducedMotionSafe();

  const moveGaze = (event: ReactPointerEvent<HTMLDivElement>) => {
    const rect = sceneRef.current?.getBoundingClientRect();
    if (!rect) return;
    setGaze({
      x: ((event.clientX - rect.left) / rect.width - 0.5) * 6,
      y: ((event.clientY - rect.top) / rect.height - 0.5) * 5,
    });
  };

  const focusEachOther = () => setGaze({ x: 4, y: 0 });

  return (
    <section id="choppada" className="story-section party-chapter">
      <div className="section-shell">
        <ChapterHeading number="01" title="A noite em que ninguém teve coragem" description="O flerte estava acontecendo. A iniciativa… nem tanto." />

        <Reveal>
          <div
            ref={sceneRef}
            className="party-scene"
            onPointerMove={moveGaze}
            onPointerDown={focusEachOther}
            onPointerLeave={() => setGaze({ x: 0, y: 0 })}
            role="group"
            aria-label="Uma representação de nós dois trocando olhares em lados opostos da festa"
          >
            <div className="party-scene__beam party-scene__beam--one" />
            <div className="party-scene__beam party-scene__beam--two" />
            <Person label="Willy" side="left" gaze={gaze} src="/photos/solo-willy.jpeg" alt="Willy na choppada" position="50% 58%" />
            <motion.div className="gaze-line" animate={reducedMotion ? undefined : { opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 2.4, repeat: Infinity }}>
              <span>olhares suspeitos</span>
            </motion.div>
            <Person label="você" side="right" gaze={{ x: -gaze.x, y: gaze.y }} src="/photos/solo-iasmim.jpeg" alt="Iasmim olhando para o espelho" position="50% 37%" />
            <p className="party-scene__hint">toque ou mova por aqui</p>
          </div>
        </Reveal>
        <div className="chapter-soundtrack"><MusicCard track={story.soundtracks.party} compact /></div>

        <div className="story-beats">
          {["Eu olhando pra você…", "Você olhando pra mim…", "Eu pensando: agora eu vou.", "Também eu cinco minutos depois: … 😂"].map((line, index) => (
            <Reveal key={line} delay={index * 0.08} className="story-beat">
              <span>{String(index + 1).padStart(2, "0")}</span><p>{line}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="party-chapter__cta" delay={0.15}>
          <p>Até que finalmente eu criei coragem.</p>
          <SoftButton onClick={() => document.querySelector("#coragem")?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" })}>
            E o que aconteceu? <ArrowDownRight size={17} />
          </SoftButton>
        </Reveal>
      </div>
    </section>
  );
}

function Person({ label, side, gaze, src, alt, position }: { label: string; side: "left" | "right"; gaze: { x: number; y: number }; src: string; alt: string; position: string }) {
  return (
    <div className={`party-person party-person--${side}`} style={{ transform: `translate(${gaze.x * 0.7}px, ${gaze.y * 0.45}px)` }}>
      <div className="party-person__portrait">
        <Image src={src} alt={alt} fill sizes="(max-width: 699px) 120px, 170px" style={{ objectFit: "cover", objectPosition: position }} />
        <div className="party-person__overlay" />
        <div className="party-person__look" aria-hidden="true">
          <span />
        </div>
      </div>
      <strong>{label}</strong>
    </div>
  );
}
