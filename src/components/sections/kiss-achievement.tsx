"use client";

import { motion } from "framer-motion";
import { AtSign, Heart, Sparkles, Trophy } from "lucide-react";
import { PhotoFrame } from "@/components/memories/photo-frame";
import { MusicCard } from "@/components/timeline/music-card";
import { Reveal } from "@/components/ui/reveal";
import { photos } from "@/data/photos";
import { story } from "@/data/story";

export function KissAchievement() {
  return (
    <section id="beijo" className="story-section kiss-achievement">
      <div className="section-shell">
        <div className="kiss-reveal">
          <div className="kiss-reveal__copy">
            <Reveal><p>Meu amigo acabou resolvendo metade do problema.</p></Reveal>
            <Reveal delay={0.1}><p>Ele ficou com sua amiga.</p></Reveal>
            <Reveal delay={0.35}><span className="dramatic-pause">pausa dramática…</span></Reveal>
            <Reveal delay={0.55}>
              <h2>E eu finalmente…<br /><em>fiquei com você.</em> <Heart size={29} fill="currentColor" /></h2>
              <span className="kiss-reveal__date">{story.firstKissLabel}</span>
            </Reveal>
          </div>
          <Reveal className="kiss-reveal__photo" delay={0.35}>
            <motion.div initial={{ rotate: 1.5 }} whileHover={{ rotate: 0, scale: 1.015 }}>
              <PhotoFrame photo={photos[0]} className="photo-frame--polaroid" />
            </motion.div>
          </Reveal>
        </div>
        <div className="chapter-soundtrack"><MusicCard track={story.soundtracks.kiss} compact /></div>

        <Reveal className="achievement-card">
          <div className="achievement-card__icon"><Trophy size={28} /></div>
          <div className="achievement-card__copy">
            <span><Sparkles size={13} /> achievement unlocked</span>
            <h3>Conseguiu o Instagram dela.</h3>
            <p>Depois de horas de troca de olhares e uma pequena dose de coragem.</p>
          </div>
          <div className="achievement-card__xp"><AtSign size={17} /><strong>+100 XP</strong></div>
        </Reveal>
      </div>
    </section>
  );
}
