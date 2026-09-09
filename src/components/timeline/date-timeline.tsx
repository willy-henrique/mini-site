"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Beer, Building2, ChevronDown, Clapperboard, Footprints, HelpCircle, Music2, Utensils } from "lucide-react";
import { useState } from "react";
import { MusicCard } from "@/components/timeline/music-card";
import { story, type StoryTrack } from "@/data/story";
import type { TimelineMoment } from "@/types/story";

const moments: Array<TimelineMoment & { track?: StoryTrack }> = [
  { id: "shopping", label: "Passeio das Águas", eyebrow: "ponto de encontro", description: `Primeiro encontro oficialmente iniciado no ${story.firstDateLocation}. Status: levemente nervoso. Companhia: 10/10.`, icon: Building2, track: story.soundtracks.shopping },
  { id: "food", label: "Um Méqui dividido", eyebrow: "primeira missão", description: "A gente dividiu um Méqui juntos — com direito a batata, conversa e eu fingindo que estava completamente tranquilo. 😂", icon: Utensils, track: story.soundtracks.food },
  { id: "walk", label: "Caminhada", eyebrow: "sem muito rumo", description: "A gente andou pelo Passeio das Águas sem muito rumo. Engraçado que eu também não estava com nenhuma pressa de ir embora.", icon: Footprints, track: story.soundtracks.walk },
  { id: "bar", label: "Bar & chopp", eyebrow: "uma pausa estratégica", description: "Um chopp, algumas músicas e uma companhia boa pra caramba.", icon: Beer },
  { id: "music", label: "Música", eyebrow: "trilha sonora", description: "Talvez a gente nem lembre de todas. Do momento, eu lembro bem.", icon: Music2 },
  { id: "cinema", label: "Odisseia", eyebrow: "sessão especial", description: "Eu não lembro de praticamente nada do filme. Meu foco ali era você.", icon: Clapperboard, track: story.soundtracks.cinema },
  { id: "secret", label: "???", eyebrow: "próxima parada", description: "Informação classificada. Acesso restrito mais abaixo.", icon: HelpCircle, track: story.soundtracks.secret },
];

export function DateTimeline() {
  const [active, setActive] = useState<string>("shopping");

  return (
    <div className="date-timeline">
      {moments.map((moment, index) => {
        const Icon = moment.icon;
        const isActive = active === moment.id;
        return (
          <div key={moment.id} className={`timeline-moment ${isActive ? "is-active" : ""}`}>
            <div className="timeline-moment__rail" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span></div>
            <button className="timeline-moment__button" onClick={() => setActive(isActive ? "" : moment.id)} aria-expanded={isActive} aria-controls={`timeline-${moment.id}`}>
              <span className="timeline-moment__icon"><Icon size={20} /></span>
              <span><small>{moment.eyebrow}</small><strong>{moment.label}</strong></span>
              <ChevronDown size={18} className="timeline-moment__chevron" />
            </button>
            <AnimatePresence initial={false}>
              {isActive ? (
                <motion.div id={`timeline-${moment.id}`} className="timeline-moment__content" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
                  <p>{moment.description}</p>
                  {moment.track ? <MusicCard track={moment.track} compact /> : null}
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
