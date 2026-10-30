import Link from "next/link";
import LineIcon from "../components/LineIcon";
import BowlCard from "../components/BowlCard";
import RevealOnScroll from "../components/RevealOnScroll";
import SplitHero from "../components/SplitHero";
import { products } from "../data/products";

export const metadata = {
  title: "DateGo — Natural Date Spread — Ivar™",
  description: "DateGo Natural Date Spread — pure dates, no added sugar, goodness in every spread. Made the Ivar way.",
  alternates: { canonical: "/date-go" },
};

const DATE_GO_IDS = [82, 83, 84, 85];

export default function DateGoPage() {
  const items = DATE_GO_IDS.map((id) => products.find((p) => p.id === id)).filter(Boolean);

  return (
    <main>
      <div className="bg-white max-w-[1500px] mx-auto px-[4vw] pt-6">
        <nav aria-label="Breadcrumb" className="text-[12px] text-ivar-muted flex items-center gap-2">
          <Link href="/" className="hover:text-ivar-forest">Home</Link>
          <span aria-hidden="true">›</span>
          <Link href="/shop" className="hover:text-ivar-forest">Menu</Link>
          <span aria-hidden="true">›</span>
          <span className="text-ivar-ink">DateGo</span>
        </nav>
      </div>

      <SplitHero
        title={<>DateGo <span className="italic text-ivar-green">— Natural Date Spread.</span></>}
        subtitle="Pure dates, no added sugar — goodness in every spread."
        img="/assets/products/eat/datego-harvest-splash.png"
        imgAlt="DateGo natural date spread"
      />

      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[1320px] mx-auto px-[6vw]">
          <RevealOnScroll className="mb-10">
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-2">Flavours</p>
            <h2 className="font-display text-[26px] md:text-[32px] text-ivar-ink">
              {items.length} ways to spread the goodness.
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {items.map((p) => (
              <BowlCard key={p.id} product={p} />
            ))}
          </div>

          <RevealOnScroll className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 items-center rounded-2xl bg-ivar-cream p-6 md:p-8">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/products/eat/datego-sachet.jpg" alt="DateGo single-serve sachet" className="w-full h-full object-contain p-4" />
            </div>
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-2">Also Available</p>
              <h3 className="font-display text-[22px] text-ivar-ink mb-2">Single-serve sachets.</h3>
              <p className="text-[13.5px] text-ivar-muted">Tear, enjoy and go — a 25g pouch of DateGo for on-the-go snacking.</p>
            </div>
          </RevealOnScroll>

          <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-ivar-forest/10 pt-10">
            <div className="text-center sm:text-left">
              <h3 className="font-display text-[22px] text-ivar-ink mb-1.5">Looking for Makhana instead?</h3>
              <p className="text-[13.5px] text-ivar-muted">Light, crunchy fox nuts — flavoured, by the pack.</p>
            </div>
            <Link href="/makhana" className="group shrink-0 inline-flex items-center gap-3 bg-ivar-forest text-white font-semibold text-sm rounded-full px-6 py-3.5 hover:bg-ivar-forestDeep transition-colors">
              Explore Makhana
              <LineIcon name="arrow" size={16} stroke={2} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
