"use client";

import { Pause, Play, Volume2 } from "lucide-react";
import { useRef, useState } from "react";
import type { StoryTrack } from "@/data/story";

interface MusicCardProps {
  track: StoryTrack;
  showPlaceholder?: boolean;
  compact?: boolean;
}

export function MusicCard({ track, showPlaceholder = false, compact = false }: MusicCardProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const hasAudio = Boolean(track.audioUrl);

  if (!hasAudio && !showPlaceholder) return null;

  const toggleAudio = async () => {
    if (!hasAudio || !audioRef.current) return;
    if (audioRef.current.paused) await audioRef.current.play();
    else audioRef.current.pause();
  };

  return (
    <div className={`music-card ${compact ? "music-card--compact" : ""}`}>
      <div className="music-card__cover"><Volume2 size={22} /><i /><i /><i /></div>
      <div className="music-card__copy">
        <small>soundtrack daquele momento</small>
        <strong>{track.title}</strong>
        <span>{track.artist || (hasAudio ? "trilha desse capítulo" : "áudio ainda não adicionado")}</span>
      </div>
      <button onClick={toggleAudio} disabled={!hasAudio} aria-label={hasAudio ? (playing ? "Pausar música" : "Tocar música") : "Música ainda não adicionada"} title={hasAudio ? undefined : "Adicione o áudio em src/data/story.ts"}>
        {playing ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
      </button>
      <div className="music-card__progress"><span /></div>
      {hasAudio ? <audio ref={audioRef} src={track.audioUrl} preload="none" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} /> : null}
    </div>
  );
}
