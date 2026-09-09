"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { StoryPhoto } from "@/types/story";

interface PhotoLightboxProps {
  photo: StoryPhoto | null;
  photos: StoryPhoto[];
  onClose: () => void;
  onChange: (photo: StoryPhoto) => void;
}

export function PhotoLightbox({ photo, photos, onClose, onChange }: PhotoLightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!photo) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") move(1);
      if (event.key === "ArrowLeft") move(-1);
    };
    const move = (direction: number) => {
      const current = photos.findIndex((item) => item.id === photo.id);
      onChange(photos[(current + direction + photos.length) % photos.length]);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [photo, photos, onChange, onClose]);

  const move = (direction: number) => {
    if (!photo) return;
    const current = photos.findIndex((item) => item.id === photo.id);
    onChange(photos[(current + direction + photos.length) % photos.length]);
  };

  return (
    <AnimatePresence>
      {photo ? (
        <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label="Visualização ampliada da foto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
          <button ref={closeRef} className="lightbox__close" onClick={onClose} aria-label="Fechar foto"><X /></button>
          <button className="lightbox__nav lightbox__nav--left" onClick={() => move(-1)} aria-label="Foto anterior"><ChevronLeft /></button>
          <motion.figure key={photo.id} className="lightbox__figure" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}>
            <div className="lightbox__image"><Image src={photo.src} alt={photo.alt} fill sizes="95vw" style={{ objectFit: "contain" }} /></div>
            <figcaption><span>{String(photo.id).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}</span>{photo.caption}</figcaption>
          </motion.figure>
          <button className="lightbox__nav lightbox__nav--right" onClick={() => move(1)} aria-label="Próxima foto"><ChevronRight /></button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
