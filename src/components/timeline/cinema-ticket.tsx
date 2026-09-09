import { Clapperboard, MapPin, Star } from "lucide-react";
import { story } from "@/data/story";

export function CinemaTicket() {
  return (
    <article className="cinema-ticket">
      <div className="cinema-ticket__main">
        <span className="eyebrow"><Clapperboard size={14} /> sessão especial</span>
        <h3>{story.movieName}</h3>
        <dl>
          <div><dt>companhia</dt><dd><Star size={14} fill="currentColor" /> 5/5</dd></div>
          <div><dt>local</dt><dd><MapPin size={14} /> {story.cinemaName || "cinema do shopping"}</dd></div>
        </dl>
        <p>Eu não lembro de praticamente nada do filme.<br /><strong>Meu foco ali era você.</strong></p>
      </div>
      <div className="cinema-ticket__stub">
        <span>ADMIT ONE</span><b>01</b><small>{story.movieDate || "naquele dia"}</small>
      </div>
    </article>
  );
}
