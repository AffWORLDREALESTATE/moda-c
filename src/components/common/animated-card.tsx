"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type AnimatedCardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function AnimatedCard({ children, className, delay = 0 }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      whileHover={{ y: -6, boxShadow: "0 10px 24px rgba(0,0,0,0.12)" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}


