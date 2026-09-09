"use client";

import Image from "next/image";
import { Maximize2 } from "lucide-react";
import type { StoryPhoto } from "@/types/story";

interface PhotoFrameProps {
  photo: StoryPhoto;
  onOpen?: (photo: StoryPhoto) => void;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function PhotoFrame({ photo, onOpen, className = "", priority = false, sizes }: PhotoFrameProps) {
  const content = (
    <>
      <div className="photo-frame__image" style={{ aspectRatio: `${photo.width} / ${photo.height}` }}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          priority={priority}
          sizes={sizes ?? "(max-width: 768px) 88vw, 520px"}
          style={{ objectFit: "cover", objectPosition: photo.position }}
        />
        <div className="photo-frame__shade" />
      </div>
      <div className="photo-frame__caption">
        <span>{photo.caption}</span>
        {onOpen ? <Maximize2 size={16} aria-hidden="true" /> : null}
      </div>
    </>
  );

  if (onOpen) {
    return (
      <button className={`photo-frame ${className}`} onClick={() => onOpen(photo)} aria-label={`Ampliar foto: ${photo.caption}`}>
        {content}
      </button>
    );
  }

  return <figure className={`photo-frame ${className}`}>{content}</figure>;
}
