"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { fadeUp } from "@/lib/motion";

export function AnimatedSection({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
