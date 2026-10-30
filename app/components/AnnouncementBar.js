"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ANNOUNCEMENTS } from "../data/announcements";

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (ANNOUNCEMENTS.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ANNOUNCEMENTS.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  if (ANNOUNCEMENTS.length === 0) return null;
  const current = ANNOUNCEMENTS[index];

  return (
    <div className="bg-ivar-slate text-ivar-accentYellow text-center overflow-hidden">
      <Link
        href={current.href}
        className="block h-9 px-[4vw] text-[12px] font-medium tracking-wide hover:underline"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={current.text}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="h-9 flex items-center justify-center gap-2"
          >
            {current.text}
            <span aria-hidden="true">→</span>
          </motion.span>
        </AnimatePresence>
      </Link>
    </div>
  );
}
