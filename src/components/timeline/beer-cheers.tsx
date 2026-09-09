"use client";

import { motion } from "framer-motion";
import { Beer } from "lucide-react";
import { useReducedMotionSafe } from "@/hooks/use-reduced-motion-safe";

export function BeerCheers() {
  const reducedMotion = useReducedMotionSafe();
  return (
    <div className="beer-cheers" aria-label="Dois copos brindando">
      <motion.div initial={{ x: -28, rotate: -8 }} whileInView={{ x: 4, rotate: 7 }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: reducedMotion ? 0 : 0.7, delay: 0.25, type: "spring" }}>
        <Beer size={58} strokeWidth={1.35} />
      </motion.div>
      <motion.span initial={{ opacity: 0, scale: 0.4 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: reducedMotion ? 0 : 0.78 }}>✦</motion.span>
      <motion.div initial={{ x: 28, rotate: 8 }} whileInView={{ x: -4, rotate: -7 }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: reducedMotion ? 0 : 0.7, delay: 0.25, type: "spring" }}>
        <Beer size={58} strokeWidth={1.35} />
      </motion.div>
    </div>
  );
}
