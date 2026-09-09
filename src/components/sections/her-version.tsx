"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Feather, Heart, SkipForward } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SoftButton } from "@/components/ui/soft-button";

const storageKey = "nossa-historia-versao-dela";
const maxLength = 800;

export function HerVersion() {
  const [text, setText] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try { setText(window.localStorage.getItem(storageKey) ?? ""); } catch { /* O campo funciona mesmo sem storage. */ }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const save = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!text.trim()) return;
    try { window.localStorage.setItem(storageKey, text.trim()); } catch { /* Mantém apenas no estado atual. */ }
    setSaved(true);
  };

  return (
    <section className="story-section her-version" aria-labelledby="her-version-title">
      <div className="section-shell section-shell--narrow">
        <Reveal>
          <p className="eyebrow"><Feather size={14} /> agora é a sua vez</p>
          <h2 id="her-version-title" className="section-title">Quero ouvir a sua versão.</h2>
          <p className="section-description">Se quiser, me conta como foi aquela noite pra você. Pode escrever muito, pouco ou simplesmente continuar — zero pressão.</p>
        </Reveal>
        <Reveal className="her-version__card">
          <form onSubmit={save}>
            <label htmlFor="her-memory">Como você lembra daquela noite?</label>
            <textarea
              id="her-memory"
              value={text}
              onChange={(event) => { setText(event.target.value); setSaved(false); }}
              maxLength={maxLength}
              rows={7}
              placeholder="Eu lembro que…"
            />
            <div className="her-version__meta"><span>Fica guardado somente neste aparelho.</span><span>{text.length}/{maxLength}</span></div>
            <div className="her-version__actions">
              <SoftButton type="submit" disabled={!text.trim()}><Heart size={16} /> Guardar minha versão</SoftButton>
              <a href="#final"><SkipForward size={15} /> prefiro só continuar</a>
            </div>
          </form>
          <AnimatePresence>
            {saved ? <motion.p className="her-version__saved" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} role="status"><Check size={16} /> Pronto. Sua versão ficou guardada por aqui.</motion.p> : null}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
