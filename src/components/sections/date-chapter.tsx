import { BeerCheers } from "@/components/timeline/beer-cheers";
import { CinemaTicket } from "@/components/timeline/cinema-ticket";
import { DateTimeline } from "@/components/timeline/date-timeline";
import { MusicCard } from "@/components/timeline/music-card";
import { PhotoFrame } from "@/components/memories/photo-frame";
import { ChapterHeading } from "@/components/ui/chapter-heading";
import { Reveal } from "@/components/ui/reveal";
import { photos } from "@/data/photos";
import { story } from "@/data/story";

export function DateChapter() {
  return (
    <section id="encontro" className="story-section date-chapter">
      <div className="section-shell">
        <ChapterHeading number="03" eyebrow="depois de algumas conversas" title="E então veio nosso primeiro encontro…" description="Um roteiro simples que, honestamente, funcionou muito bem." />
        <div className="date-chapter__grid">
          <Reveal className="date-chapter__timeline"><DateTimeline /></Reveal>
          <Reveal className="date-chapter__photo" delay={0.15}>
            <PhotoFrame photo={photos[1]} className="photo-frame--editorial" />
            <p>Sem rumo pelo Passeio das Águas — e sem pressa nenhuma de ir embora.</p>
          </Reveal>
        </div>

        <div className="date-details">
          <Reveal className="date-detail-card date-detail-card--beer">
            <BeerCheers />
            <div><span className="eyebrow">no bar</span><h3>Um chopp.</h3><p>Algumas músicas.<br />Uma companhia boa pra caramba.</p></div>
          </Reveal>
          <Reveal className="date-detail-card"><MusicCard track={story.soundtracks.bar} showPlaceholder /></Reveal>
          <Reveal className="date-detail-card date-detail-card--wide"><CinemaTicket /></Reveal>
        </div>
      </div>
    </section>
  );
}
