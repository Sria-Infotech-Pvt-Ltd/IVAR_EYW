import Link from "next/link";
import LineIcon from "../components/LineIcon";
import CategoryCardGrid from "../components/CategoryCardGrid";
import StatsBand from "../components/StatsBand";
import DarkCTA from "../components/DarkCTA";
import RevealOnScroll from "../components/RevealOnScroll";
import FeaturedRail from "../components/FeaturedRail";
import { HEALTH_CATEGORIES, productsForHealthCategory } from "../data/healthCategories";

export const metadata = {
  title: "Ivar Health — Ivar™",
  description: "Daily shots and active nutrition essentials for a balanced everyday life.",
  alternates: { canonical: "/health" },
};

const PILLARS = [
  { title: "Traditional Practice", icon: "leaf" },
  { title: "Mindful Living", icon: "heart" },
  { title: "Everyday Balance", icon: "globe" },
];

export default function HealthPage() {
  const shots = HEALTH_CATEGORIES.find((c) => c.slug === "daily-shots");
  const shotsProducts = productsForHealthCategory("daily-shots");

  return (
    <main>
      <section className="bg-white overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-[4vw] py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll>
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-5">Ivar Health</p>
            <h1 className="font-display text-editorial-hero leading-[1.05] text-ivar-ink mb-5">
              Balanced Living, <span className="italic text-ivar-green">The Traditional Way.</span>
            </h1>
            <p className="text-editorial-body text-ivar-muted max-w-[440px] mb-8">
              Daily shots and active nutrition essentials — rooted in the same Indian traditions
              behind everything Ivar makes.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="#categories"
                className="group inline-flex items-center gap-3 bg-ivar-forest text-white text-[14px] font-semibold rounded-full pl-6 pr-5 py-3.5 hover:bg-ivar-forestDeep transition-colors"
              >
                Explore Categories
                <LineIcon name="arrow" size={16} stroke={2} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 border-t border-ivar-forest/10 pt-6">
              {PILLARS.map((p) => (
                <div key={p.title} className="flex items-center gap-2.5">
                  <span className="size-9 rounded-full border border-ivar-forest/25 text-ivar-forest flex items-center justify-center shrink-0">
                    <LineIcon name={p.icon} size={16} stroke={1.6} />
                  </span>
                  <span className="text-[12.5px] text-ivar-muted max-w-[90px] leading-tight">{p.title}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll y={0} delay={0.1} className="relative aspect-[4/5] lg:aspect-[4/4.5] overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {/* TODO: this photo's packaging still prints the old "EAT | YOGA | WELLNESS" tagline — swap once new photography is ready */}
            <img src="/assets/products/eat/immunity-shield.jpg" alt="Ivar Health" className="w-full h-full object-cover" />
          </RevealOnScroll>
        </div>
      </section>

      <div id="categories">
        <CategoryCardGrid
          categories={HEALTH_CATEGORIES}
          basePath="/health"
          eyebrow="Categories"
          title="Explore Ivar Health."
        />
      </div>

      <StatsBand
        bg="bg-white"
        stats={[
          { value: "2", label: "Health Categories" },
          { value: "100%", label: "Traditional Practice" },
          { value: "0", label: "Synthetic Additives" },
          { value: "Daily", label: "Healthy Rituals" },
        ]}
      />

      {shots && shotsProducts.length > 0 && (
        <FeaturedRail eyebrow="Featured" title="Daily Shots" viewAllHref="/health/daily-shots" products={shotsProducts} />
      )}

      <DarkCTA
        img="/assets/products/eat/pantry-collection.png"
        eyebrow="Ivar Health"
        title="Balance, Built Into Everyday Life."
        text="From a morning shot to an evening routine — small rituals that add up to a healthier everyday."
        cta="Explore Ivar Essentials"
        ctaHref="/foods"
        align="center"
      />
    </main>
  );
}
