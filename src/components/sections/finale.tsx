import Image from "next/image";
import { ArrowUp, Heart, House, Images } from "lucide-react";
import { FinalQuestion } from "@/components/sections/final-question";
import { StoryProgress } from "@/components/sections/story-progress";
import { MusicCard } from "@/components/timeline/music-card";
import { Reveal } from "@/components/ui/reveal";
import { photos } from "@/data/photos";
import { story } from "@/data/story";

export function Finale() {
  const photo = photos[3];
  return (
    <section id="final" className="finale">
      <div className="final-photo">
        <Image src={photo.src} alt={photo.alt} fill sizes="100vw" className="final-photo__image" style={{ objectPosition: photo.position }} />
        <div className="final-photo__overlay" />
        <div className="final-photo__copy section-shell">
          <Reveal><p>Até agora foram poucos registros…</p></Reveal>
          <Reveal delay={0.15}><p>mas várias lembranças boas.</p></Reveal>
          <Reveal delay={0.3}><h2>E eu espero que isso aqui seja só o começo.</h2></Reveal>
        </div>
      </div>
      <div className="finale__content section-shell section-shell--narrow">
        <Reveal><p className="eyebrow">até aqui</p><h2 className="section-title">Capítulos já desbloqueados</h2></Reveal>
        <StoryProgress />
        <Reveal className="next-stop-card">
          <div className="next-stop-card__icon"><House size={24} /><Heart size={12} fill="currentColor" /></div>
          <div>
            <p className="eyebrow">spoiler do próximo capítulo</p>
            <h3>Próxima parada: <em>minha casa.</em> <Heart className="next-stop-card__heart" size={18} fill="currentColor" aria-label="coração" /></h3>
            <span>O roteiro ainda está em construção. A companhia já foi escolhida.</span>
          </div>
        </Reveal>
        <div className="chapter-soundtrack"><MusicCard track={story.soundtracks.final} compact /></div>
        <FinalQuestion />
        <nav className="final-nav" aria-label="Ações finais">
          <a href="#inicio"><ArrowUp size={15} /> voltar ao começo</a>
          <a href="#galeria"><Images size={15} /> ver nossas fotos</a>
        </nav>
        <p className="made-with-care">feito com carinho por Willy Henrique.</p>
      </div>
    </section>
  );
}
