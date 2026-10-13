import Link from "next/link";
import LineIcon from "../components/LineIcon";
import BowlCard from "../components/BowlCard";
import RevealOnScroll from "../components/RevealOnScroll";
import { products } from "../data/products";

export const metadata = {
  title: "Makhana — Ivar™",
  description: "Light, crunchy roasted fox nuts — flavoured and packed by weight, the Ivar way.",
  alternates: { canonical: "/makhana" },
};

const FLAVOUR_IDS = [50, 73, 74, 75, 76];
const WEIGHT_OPTIONS = [
  { label: "Pouch", grams: 100 },
  { label: "Share Pack", grams: 200 },
  { label: "Family Pack", grams: 400 },
];

export default function MakhanaPage() {
  const flavours = FLAVOUR_IDS.map((id) => products.find((p) => p.id === id)).filter(Boolean);
  const product = flavours[0];

  return (
    <main>
      <section className="relative py-20 md:py-28 overflow-hidden bg-ivar-forestDeep">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/products/eat/makhana-hero-crunchy.jpeg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ivar-forestDeep via-ivar-forestDeep/70 to-ivar-forestDeep/40" />
        </div>
        <div className="relative max-w-[1320px] mx-auto px-[6vw] w-full">
          <nav aria-label="Breadcrumb" className="text-[12px] text-white/60 flex items-center gap-2 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href="/shop" className="hover:text-white">Menu</Link>
            <span aria-hidden="true">›</span>
            <span className="text-white">Makhana</span>
          </nav>
          <h1 className="font-display text-[32px] md:text-[46px] leading-[1.08] text-white max-w-[560px]">
            Makhana <span className="italic text-ivar-sage">— Flavoured & By Weight.</span>
          </h1>
          <p className="text-white/70 text-base md:text-lg mt-3 max-w-[520px]">
            Light, crunchy roasted fox nuts — seasoned for flavour, packed for every craving.
          </p>
          <a href="#flavoured" className="mt-8 inline-flex items-center gap-3 bg-white text-ivar-forest text-[14px] font-semibold rounded-full pl-6 pr-5 py-3.5 hover:bg-ivar-sage transition-colors">
            Explore Flavours
            <LineIcon name="arrow" size={16} stroke={2} />
          </a>
        </div>
      </section>

      {flavours.length > 0 && (
        <section className="bg-white py-14 md:py-20">
          <div className="max-w-[1320px] mx-auto px-[6vw]">
            <RevealOnScroll id="flavoured" className="scroll-mt-24 mb-10">
              <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-2">Flavoured</p>
              <h2 className="font-display text-[26px] md:text-[32px] text-ivar-ink">
                {flavours.length} flavours, seasoned for real craving.
              </h2>
            </RevealOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
              {flavours.map((p) => (
                <BowlCard key={p.id} product={p} />
              ))}
            </div>

            <RevealOnScroll id="weights" className="scroll-mt-24">
              <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-2">Weights / Chips</p>
              <h2 className="font-display text-[26px] md:text-[32px] text-ivar-ink mb-6">
                Packed for every craving.
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {WEIGHT_OPTIONS.map((w) => (
                  <div key={w.label} className="rounded-2xl bg-ivar-cream p-6">
                    <p className="text-[13.5px] font-semibold text-ivar-ink">{w.label}</p>
                    <p className="text-[12.5px] text-ivar-muted mt-1">{w.grams}g</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>

            <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-ivar-forest/10 pt-10">
              <div className="text-center sm:text-left">
                <h3 className="font-display text-[22px] text-ivar-ink mb-1.5">Looking for something date-based?</h3>
                <p className="text-[13.5px] text-ivar-muted">Naturally sweet, energy-rich date bites.</p>
              </div>
              <Link href="/date-go" className="group shrink-0 inline-flex items-center gap-3 bg-ivar-forest text-white font-semibold text-sm rounded-full px-6 py-3.5 hover:bg-ivar-forestDeep transition-colors">
                Explore Date Go
                <LineIcon name="arrow" size={16} stroke={2} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
