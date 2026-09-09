"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

const konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

export function EasterEggs() {
  const [heartTaps, setHeartTaps] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [heartRain, setHeartRain] = useState(false);

  useEffect(() => {
    let position = 0;
    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
      position = key === konami[position] ? position + 1 : key === konami[0] ? 1 : 0;
      if (position === konami.length) {
        setHeartRain(true);
        window.setTimeout(() => setHeartRain(false), 4_500);
        position = 0;
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const tapHeart = () => {
    const next = heartTaps + 1;
    setHeartTaps(next);
    if (next === 5) {
      setShowMessage(true);
      window.setTimeout(() => setShowMessage(false), 3_500);
    }
  };

  return (
    <>
      <button className="easter-heart" onClick={tapHeart} aria-label="Um coração discreto. Talvez faça alguma coisa.">
        <Heart size={14} fill="currentColor" />
      </button>
      <AnimatePresence>
        {showMessage ? <motion.div className="easter-toast" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} role="status">Você realmente precisava clicar cinco vezes nisso? 😂</motion.div> : null}
        {heartRain ? (
          <motion.div className="heart-rain" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} aria-hidden="true">
            {Array.from({ length: 24 }, (_, index) => <i key={index} style={{ "--i": index } as React.CSSProperties}>♥</i>)}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
