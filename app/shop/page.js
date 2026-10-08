"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { products } from "../data/products";
import BowlCard from "../components/BowlCard";
import LineIcon from "../components/LineIcon";
import RevealOnScroll from "../components/RevealOnScroll";

const eat = products.filter((p) => p.group === "Eat");
const CATEGORIES = ["All", ...Array.from(new Set(eat.map((p) => p.cat)))];

const FEATURES = [
  { icon: "leaf", label: "Natural Ingredients" },
  { icon: "shield", label: "Hygienic & Safe" },
  { icon: "truck", label: "Delivered Fresh" },
  { icon: "scope", label: "No Added Sugar" },
];

const hay = (p) => `${p.name} ${p.desc} ${(p.ingredients || []).join(" ")}`.toLowerCase();
const INGREDIENTS = [
  { id: "chicken", label: "Chicken", test: (p) => /chicken/.test(hay(p)) },
  { id: "paneer", label: "Paneer", test: (p) => /paneer/.test(hay(p)) },
  { id: "egg", label: "Egg", test: (p) => /\begg/.test(hay(p)) },
  { id: "millet", label: "Millet", test: (p) => /millet|ragi|jowar/.test(hay(p)) },
];
const GOALS = [
  { id: "high-protein", label: "High Protein", test: (p) => (p.nutrition?.proteinG ?? 0) >= 20 },
  { id: "weight-loss", label: "Weight Loss", test: (p) => p.nutrition?.kcal && p.nutrition.kcal <= 250 },
  { id: "muscle", label: "Muscle Building", test: (p) => (p.nutrition?.proteinG ?? 0) >= 25 },
];

function Tag({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 px-4 py-2 rounded-3xl text-xs font-semibold uppercase tracking-wide transition-colors cursor-pointer border ${
        active ? "bg-ivar-forest text-white border-ivar-forest" : "bg-white text-[#4B5563] border-[#ece8da] hover:border-ivar-forest/40"
      }`}
      suppressHydrationWarning
    >
      {children}
    </button>
  );
}

function ShopContent() {
  const [cat, setCat] = useState("All");
  const [query, setQuery] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("q");
    if (q) setQuery(q);
  }, []);

  const all = [...INGREDIENTS, ...GOALS];
  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    const active = all.filter((t) => tags.includes(t.id));
    return eat.filter(
      (p) =>
        (cat === "All" || p.cat === cat) &&
        (!q || hay(p).includes(q) || p.cat.toLowerCase().includes(q)) &&
        active.every((t) => t.test(p))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cat, query, tags]);

  const toggle = (id) => setTags((t) => (t.includes(id) ? t.filter((x) => x !== id) : [...t, id]));

  return (
    <>
      <div className="bg-ivar-mint border border-ivar-teal rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-start gap-3">
          <span className="text-2xl" aria-hidden="true">🌱</span>
          <div>
            <p className="font-bold text-base">Want to save more?</p>
            <p className="text-sm text-[#4B5563]">Subscribe and save up to 15% on your daily healthy meals.</p>
          </div>
        </div>
        <Link href="/plans" className="shrink-0 text-center bg-ivar-dark text-white font-semibold text-sm rounded-3xl px-6 py-3 hover:bg-ivar-darker transition-colors">
          View Subscription Plans
        </Link>
      </div>

      <div className="sticky top-[68px] md:top-[72px] z-20 bg-white/95 backdrop-blur border-b border-[#ece8da] -mx-[4vw] px-[4vw] py-3 mb-6">
        <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar">
          <label className="relative shrink-0 w-[180px] sm:w-[220px]">
            <span className="sr-only">Search the menu</span>
            <LineIcon name="search" size={15} stroke={2} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9a9f9a]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dishes..."
              className="w-full bg-[#F7F6F2] border border-[#ece8da] rounded-full pl-9 pr-4 py-2.5 text-[13px] focus:border-ivar-forest/40"
              suppressHydrationWarning
            />
          </label>
          <span className="shrink-0 w-px h-6 bg-[#ece8da]" aria-hidden="true" />
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`shrink-0 px-5 py-2.5 rounded-full text-[13px] font-semibold transition-colors cursor-pointer ${
                cat === c ? "bg-ivar-forest text-white" : "bg-[#F7F6F2] text-[#4B5563] hover:bg-ivar-cream"
              }`}
              suppressHydrationWarning
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
        {INGREDIENTS.map((t) => (
          <Tag key={t.id} active={tags.includes(t.id)} onClick={() => toggle(t.id)}>
            {t.label}
          </Tag>
        ))}
        {GOALS.map((t) => (
          <Tag key={t.id} active={tags.includes(t.id)} onClick={() => toggle(t.id)}>
            {t.label}
          </Tag>
        ))}
      </div>

      <div className="mt-8 mb-6">
        <h2 className="font-display text-[26px] md:text-[30px] text-ivar-ink">{cat === "All" ? "Everything" : cat}</h2>
        <p className="text-[13.5px] text-ivar-muted mt-1.5">
          {list.length} items · Made fresh ·{" "}
          <Link href="/plans" className="text-ivar-forest font-medium underline underline-offset-4">
            Subscribe &amp; Save up to 15% on meal plans.
          </Link>
        </p>
      </div>

      {list.length === 0 ? (
        <p className="text-[#4B5563] py-16 text-center">Nothing matches — try clearing a filter.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {list.map((p) => (
            <BowlCard key={p.id} product={p} tag={(p.nutrition?.proteinG ?? 0) >= 30 ? "High Protein" : undefined} />
          ))}
        </div>
      )}
    </>
  );
}

export default function ShopPage() {
  return (
    <main>
      <section className="bg-white overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-[4vw] py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll>
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-5">Our Full Menu</p>
            <h1 className="font-display text-editorial-hero leading-[1.05] text-ivar-ink mb-5">
              Goodness in <span className="italic text-ivar-green">every bite.</span>
            </h1>
            <p className="text-editorial-body text-ivar-muted max-w-[460px] mb-8">
              Breakfast to bowls, snacks to teas — all made fresh, high in protein and ready when you are.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-[540px]">
              {FEATURES.map((f) => (
                <div key={f.label} className="flex items-center gap-2.5">
                  <span className="size-9 rounded-full border border-ivar-forest/25 text-ivar-forest flex items-center justify-center shrink-0">
                    <LineIcon name={f.icon} size={16} stroke={1.6} />
                  </span>
                  <span className="text-[12px] text-ivar-muted leading-tight">{f.label}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll y={0} delay={0.1} className="relative aspect-[4/5] lg:aspect-[4/4.5] overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {/* TODO: this photo's packaging still prints the old "EAT | YOGA | WELLNESS" tagline — swap once new photography is ready */}
            <img src="/assets/products/eat/makhana-crunch.jpg" alt="The Ivar menu" className="w-full h-full object-cover" />
          </RevealOnScroll>
        </div>
      </section>

      <section className="max-w-[1500px] mx-auto px-[4vw] pb-14 md:pb-20">
        <ShopContent />
      </section>
    </main>
  );
}
