"use client";

import { useCallback, useState } from "react";
import { PhotoFrame } from "@/components/memories/photo-frame";
import { PhotoLightbox } from "@/components/memories/photo-lightbox";
import { MusicCard } from "@/components/timeline/music-card";
import { ChapterHeading } from "@/components/ui/chapter-heading";
import { Reveal } from "@/components/ui/reveal";
import { photos } from "@/data/photos";
import { story } from "@/data/story";
import type { StoryPhoto } from "@/types/story";

export function MemoryGallery() {
  const [selected, setSelected] = useState<StoryPhoto | null>(null);
  const close = useCallback(() => setSelected(null), []);
  const select = useCallback((photo: StoryPhoto) => setSelected(photo), []);

  return (
    <section id="memorias" className="story-section memory-gallery">
      <div className="section-shell">
        <ChapterHeading number="04" eyebrow="rolinho da câmera" title="Alguns registros até agora." description="Poucas fotos, talvez. Bons motivos para guardar cada uma delas." />
        <div id="galeria" className="memory-gallery__grid">
          {photos.map((photo, index) => (
            <Reveal key={photo.id} delay={index * 0.08} className={`memory-gallery__item memory-gallery__item--${index + 1}`}>
              <PhotoFrame photo={photo} onOpen={select} sizes="(max-width: 768px) 86vw, 42vw" />
            </Reveal>
          ))}
        </div>
        <div className="chapter-soundtrack"><MusicCard track={story.soundtracks.memories} compact /></div>
      </div>
      <PhotoLightbox photo={selected} photos={photos} onClose={close} onChange={select} />
    </section>
  );
}
