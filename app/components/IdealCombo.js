"use client";

import { useRef } from "react";
import Link from "next/link";
import { products } from "../data/products";

// stotodo/Dawn "Looking for the ideal combo?" slider — each slide pairs a
// product with a one-line descriptor and its own photo. No separate
// lifestyle photography exists yet, so the product shot doubles as both.
const COMBO_IDS = [86, 82, 76, 84];
const DESCRIPTIONS = {
  86: "Mix, shake and make every bowl your own.",
  82: "Pure dates, naturally sweet energy.",
  76: "Classic makhana crunch with cheese & herbs.",
  84: "Rich pistachio flavour, naturally sweet.",
};

export default function IdealCombo() {
  const rail = useRef(null);
  const items = COMBO_IDS.map((id) => products.find((p) => p.id === id)).filter(Boolean);
  const scroll = (dir) => rail.current?.scrollBy({ left: dir * 380, behavior: "smooth" });

  if (items.length === 0) return null;

  return (
    <section className="bg-ivar-surface py-10 md:py-16">
      <div className="max-w-[1200px] mx-auto px-[15px] md:px-[50px]">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-[26px] md:text-[31px] font-normal text-ivar-ink">Looking for the ideal combo?</h2>
          <p className="text-[13.5px] text-ivar-slate/70 mt-2">We&apos;ve curated the right picks to match your day.</p>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous"
            className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 z-10 size-9 rounded-full bg-white shadow-md items-center justify-center text-ivar-ink cursor-pointer"
            suppressHydrationWarning
          >
            ‹
          </button>

          <div ref={rail} className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory">
            {items.map((p) => (
              <div key={p.id} className="snap-start shrink-0 w-[300px] md:w-[360px] grid grid-cols-2 bg-white overflow-hidden">
                <div className="p-5 flex flex-col justify-center">
                  <h3 className="text-[16px] text-ivar-ink mb-1.5 leading-snug">{p.name}</h3>
                  <p className="text-[12px] text-ivar-slate/70 mb-4 leading-relaxed">
                    {DESCRIPTIONS[p.id] || p.desc}
                  </p>
                  <Link
                    href={`/product/${p.id}`}
                    className="inline-flex w-max items-center px-4 h-8 bg-ivar-slate text-white text-[12px] font-semibold"
                  >
                    Shop Now
                  </Link>
                </div>
                <div className="aspect-square bg-ivar-cream">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll(1)}
            aria-label="Next"
            className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 size-9 rounded-full bg-white shadow-md items-center justify-center text-ivar-ink cursor-pointer"
            suppressHydrationWarning
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
