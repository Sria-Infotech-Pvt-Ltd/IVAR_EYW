"use client";

import Link from "next/link";
import RevealOnScroll from "./RevealOnScroll";
import LineIcon from "./LineIcon";

const METRICS = [
  { label: "Roasted, not fried", icon: "leaf" },
  { label: "High in plant protein", icon: "shield" },
  { label: "Naturally gluten-free", icon: "leaf" },
  { label: "No artificial preservatives", icon: "flask" },
  { label: "Traditionally sourced", icon: "leaf" },
  { label: "Ready in seconds", icon: "box" },
];

export default function SignatureFeature() {
  return (
    <section className="relative bg-ivar-forestDeep py-16 md:py-24 overflow-hidden">
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-6 md:-top-10 left-1/2 -translate-x-1/2 whitespace-nowrap font-display uppercase text-[22vw] md:text-[15vw] leading-none text-white/[0.05]"
      >
        Makhana
      </span>

      <div className="relative max-w-[1500px] mx-auto px-[6vw]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-10 items-center">
          <RevealOnScroll>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-display text-[15px] text-ivar-sage">01</span>
              <span className="h-px w-10 bg-white/20" />
              <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-sage font-semibold">
                Our Flagship Ingredient
              </p>
            </div>

            <h2 className="font-display text-editorial-section leading-[1.1] text-white mb-5 max-w-[460px]">
              Makhana. <span className="italic text-ivar-sage">Reimagined.</span>
            </h2>
            <p className="text-editorial-body text-white/65 mb-9 max-w-[440px]">
              One of India&apos;s oldest superfoods, roasted and seasoned into a light, crunchy snack for everyday
              life — real ingredients, nothing artificial.
            </p>

            <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-6 md:p-7 mb-9">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {METRICS.map((m) => (
                  <li key={m.label} className="flex items-center gap-3 text-[13.5px] text-white/85">
                    <span className="size-8 rounded-full bg-ivar-sage/20 text-ivar-sage flex items-center justify-center shrink-0">
                      <LineIcon name={m.icon} size={15} stroke={1.8} />
                    </span>
                    {m.label}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/ingredients/makhana"
              className="group inline-flex w-max items-center gap-4 bg-white text-ivar-ink text-[14px] font-semibold rounded-full pl-6 pr-2 py-2 hover:pr-2 transition-colors"
            >
              Explore Makhana
              <span className="size-10 rounded-full bg-ivar-forestDeep text-white flex items-center justify-center shrink-0">
                <LineIcon name="arrow" size={16} stroke={2} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </RevealOnScroll>

          <RevealOnScroll y={0} delay={0.1} className="relative h-[320px] md:h-[440px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/products/eat/makhana-himalayan-salt-feast.png"
              alt="Ivar Roasted Makhana"
              className="w-full h-full object-contain"
            />
          </RevealOnScroll>
        </div>

        <div className="mt-14 md:mt-20 flex items-center justify-between gap-6 border-t border-white/10 pt-6">
          <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-white/60 font-semibold">
            <LineIcon name="leaf" size={13} stroke={1.8} className="text-ivar-sage" />
            Ancient Indian Superfood
          </span>
          <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-white/60 font-semibold">
            Modern Everyday Snacking
            <LineIcon name="leaf" size={13} stroke={1.8} className="text-ivar-sage" />
          </span>
        </div>
      </div>
    </section>
  );
}
