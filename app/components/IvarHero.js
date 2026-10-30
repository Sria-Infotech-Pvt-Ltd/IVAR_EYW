"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import LineIcon from "./LineIcon";

const TRUST_BADGES = [
  { icon: "leaf", title: "Naturally Made", sub: "Always" },
  { icon: "flask", title: "Protein Rich", sub: "Every Bite" },
  { icon: "shield", title: "No Preservatives", sub: "Ever" },
];

const MARQUEE_WORDS = [
  "NATURALLY MADE",
  "ROASTED FRESH",
  "NO PRESERVATIVES",
  "HIGH PROTEIN",
  "PAN-INDIA DELIVERY",
  "GOOD FOOD, BRIGHTER DAYS",
];

export default function IvarHero() {
  return (
    <>
      <section className="relative overflow-hidden bg-ivar-cream">
        <div className="max-w-[1500px] mx-auto px-[6vw] py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2.5 rounded-full border border-ivar-forest/20 bg-white px-5 py-2.5 text-[11px] tracking-[0.18em] uppercase text-ivar-forest font-semibold mb-7">
              <LineIcon name="leaf" size={14} stroke={1.8} />
              Pure Natural Indian Snacking
            </span>

            <h1 className="font-sans text-[44px] sm:text-[56px] md:text-[66px] leading-[1.06] font-bold text-ivar-ink tracking-tight">
              Everyday snacking,
              <br />
              <span className="font-display italic font-normal text-ivar-green">made wholesome.</span>
            </h1>

            <p className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-ivar-muted max-w-[460px]">
              Roasted makhana and date-based bites, made with natural ingredients — thoughtfully made, delivered fresh across India.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/shop"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-ivar-forest text-white text-[14px] font-semibold rounded-full pl-6 pr-5 py-3.5 hover:bg-ivar-forestDeep transition-colors"
              >
                Explore Menu
                <LineIcon name="arrow" size={16} stroke={2} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/find-ivar"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border border-ivar-gold text-ivar-forestDeep text-[14px] font-semibold rounded-full pl-5 pr-4 py-3.5 hover:bg-ivar-gold/10 transition-colors"
              >
                <LineIcon name="search" size={15} stroke={1.9} className="text-ivar-gold" />
                Find Ivar
              </Link>
            </div>

            <div className="mt-11 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[540px]">
              {TRUST_BADGES.map((b) => (
                <div key={b.title} className="flex items-center gap-2.5">
                  <span className="size-10 rounded-full bg-white border border-ivar-forest/15 text-ivar-forest flex items-center justify-center shrink-0">
                    <LineIcon name={b.icon} size={17} stroke={1.6} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[12.5px] font-semibold text-ivar-ink leading-tight">{b.title}</p>
                    <p className="text-[11px] text-ivar-muted leading-tight">{b.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-[28px] overflow-hidden aspect-[4/3.2]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/products/eat/hero-makhana-dates-splash.png"
                alt="Ivar makhana and snacks"
                className="w-full h-full object-cover"
              />
            </div>

            <span className="absolute -top-4 right-4 sm:right-8 inline-flex items-center gap-2 bg-ivar-gold text-ivar-forestDeep text-[12.5px] font-semibold rounded-full px-4 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.14)]">
              <LineIcon name="star" size={14} stroke={0} className="fill-current" />
              Loved Across India
            </span>

            <div className="absolute -bottom-5 left-4 sm:left-8 bg-white rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.12)] px-4 py-3.5 flex items-center gap-3">
              <span className="size-9 rounded-full bg-ivar-forest/10 text-ivar-forest flex items-center justify-center shrink-0">
                <LineIcon name="shield" size={17} stroke={1.8} />
              </span>
              <div>
                <p className="text-[11px] font-bold tracking-wide text-ivar-ink uppercase leading-tight">No Preservatives</p>
                <p className="text-[11px] text-ivar-muted leading-tight">100% Natural</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="bg-ivar-forest py-4 overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((word, i) => (
            <span key={i} className="flex items-center gap-8 px-8 text-[13px] tracking-[0.14em] uppercase font-semibold text-white/90 whitespace-nowrap">
              {word}
              <LineIcon name="leaf" size={13} stroke={2} className="text-ivar-gold shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
