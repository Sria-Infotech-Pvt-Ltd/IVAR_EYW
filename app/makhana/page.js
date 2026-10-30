import Link from "next/link";
import LineIcon from "../components/LineIcon";
import BowlCard from "../components/BowlCard";
import RevealOnScroll from "../components/RevealOnScroll";
import IngredientToProduct from "../components/IngredientToProduct";
import MakhanaStory from "../components/MakhanaStory";
import SplitHero from "../components/SplitHero";
import { products } from "../data/products";

export const metadata = {
  title: "Makhana — Ivar™",
  description: "Light, crunchy roasted fox nuts — flavoured and packed by weight, the Ivar way.",
  alternates: { canonical: "/makhana" },
};

const FLAVOUR_IDS = [50, 73, 74, 75, 76];
const KIT_ID = 86;
const WEIGHT_OPTIONS = [
  { label: "Pouch", grams: 100 },
  { label: "Share Pack", grams: 200 },
  { label: "Family Pack", grams: 400 },
];

export default function MakhanaPage() {
  const flavours = FLAVOUR_IDS.map((id) => products.find((p) => p.id === id)).filter(Boolean);
  const kit = products.find((p) => p.id === KIT_ID);

  return (
    <main>
      <div className="bg-white max-w-[1500px] mx-auto px-[4vw] pt-6">
        <nav aria-label="Breadcrumb" className="text-[12px] text-ivar-muted flex items-center gap-2">
          <Link href="/" className="hover:text-ivar-forest">Home</Link>
          <span aria-hidden="true">›</span>
          <Link href="/shop" className="hover:text-ivar-forest">Menu</Link>
          <span aria-hidden="true">›</span>
          <span className="text-ivar-ink">Makhana</span>
        </nav>
      </div>

      <SplitHero
        title={<>Makhana <span className="italic text-ivar-green">— Flavoured & By Weight.</span></>}
        subtitle="Light, crunchy roasted fox nuts — seasoned for flavour, packed for every craving."
        cta="Explore Flavours"
        ctaHref="#flavoured"
        img="/assets/products/eat/hero-makhana-splash.png"
        imgAlt="Ivar roasted makhana"
      />

      <IngredientToProduct />

      <MakhanaStory />

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

            <RevealOnScroll className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-square rounded-2xl overflow-hidden order-2 md:order-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/products/eat/makhana-light-snack-banner.jpg"
                  alt="Makhana — light snack, big benefits"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-2">Why Makhana</p>
                <h3 className="font-display text-[26px] md:text-[32px] text-ivar-ink mb-4">
                  Light snack. Big benefits.
                </h3>
                <p className="text-[13.5px] text-ivar-muted">
                  Roasted fox nuts, seasoned the Ivar way — rich in protein, low in calories and free of
                  preservatives. A guilt-free crunch for any time of day.
                </p>
              </div>
            </RevealOnScroll>

            {kit && (
              <RevealOnScroll className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-2xl bg-ivar-cream p-6 md:p-10">
                <div className="relative aspect-[1145/1374] max-w-[340px] mx-auto w-full rounded-xl overflow-hidden bg-white order-2 md:order-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/products/eat/makhana-flavour-kit-model.jpg" alt="Makhana Flavour Kit" className="w-full h-full object-cover" />
                </div>
                <div className="order-1 md:order-1">
                  <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-2">New</p>
                  <h3 className="font-display text-[24px] md:text-[28px] text-ivar-ink mb-3">One Makhana. Many Flavours.</h3>
                  <p className="text-[13.5px] text-ivar-muted mb-5">
                    Roasted makhana plus 5 flavour sachets — Classic Masala, Peri Peri, Pudina Masala, Cheese &amp; Herbs,
                    Himalayan Salt &amp; Pepper. Mix, shake, make it yours.
                  </p>
                  <a
                    href={`/product/${kit.id}`}
                    className="inline-flex items-center gap-3 bg-ivar-forest text-white font-semibold text-sm rounded-full px-6 py-3.5 hover:bg-ivar-forestDeep transition-colors"
                  >
                    View Flavour Kit
                    <LineIcon name="arrow" size={16} stroke={2} />
                  </a>
                </div>
              </RevealOnScroll>
            )}

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
