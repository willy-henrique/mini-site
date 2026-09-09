"use client";

import { Clock3 } from "lucide-react";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { story } from "@/data/story";
import { calculateElapsed, padTime, type ElapsedTime } from "@/lib/time";

const emptyTime: ElapsedTime = { days: 0, hours: 0, minutes: 0, seconds: 0 };

export function TimeCounter() {
  const [elapsed, setElapsed] = useState<ElapsedTime>(emptyTime);

  useEffect(() => {
    const update = () => setElapsed(calculateElapsed(story.firstKissDate));
    update();
    const timer = window.setInterval(update, 1_000);
    return () => window.clearInterval(timer);
  }, []);

  const values = [
    { value: elapsed.days, label: "dias" },
    { value: elapsed.hours, label: "horas" },
    { value: elapsed.minutes, label: "minutos" },
    { value: elapsed.seconds, label: "segundos" },
  ];

  return (
    <section className="counter-section">
      <div className="section-shell section-shell--narrow">
        <Reveal className="counter-section__header"><Clock3 size={22} /><p>Desde aquele primeiro beijo…</p></Reveal>
        <Reveal className="time-counter" aria-live="off">
          {values.map(({ value, label }) => <div key={label}><strong>{label === "dias" ? value : padTime(value)}</strong><span>{label}</span></div>)}
        </Reveal>
        <Reveal className="counter-section__note">
          desde as 03:43 daquela madrugada<br />em que a coragem finalmente resolveu aparecer. 😂
        </Reveal>
      </div>
    </section>
  );
}
