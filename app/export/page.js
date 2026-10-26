import Link from "next/link";
import LineIcon from "../components/LineIcon";
import RevealOnScroll from "../components/RevealOnScroll";
import ProcessTimeline from "../components/ProcessTimeline";
import DarkCTA from "../components/DarkCTA";

export const metadata = {
  title: "Export — Ivar™",
  description: "Indian goodness, exported to the world — Ivar's snacks, ready-to-eat formats and everyday essentials for international markets.",
  alternates: { canonical: "/export" },
};

const PILLARS = [
  { title: "Quality Certified", icon: "shield", text: "FSSAI-compliant, quality-checked at every stage before it ships." },
  { title: "Export-Ready Packaging", icon: "box", text: "Shelf-stable formats built for long transit and global retail." },
  { title: "Traceable Sourcing", icon: "leaf", text: "Every ingredient traced back to its region of origin in India." },
  { title: "Global Logistics Support", icon: "truck", text: "Documentation, compliance and shipping handled end to end." },
];

const PROCESS_STEPS = [
  { n: "01", title: "Enquiry", text: "Tell us your market, volumes and the products you need.", icon: "search" },
  { n: "02", title: "Compliance", text: "Documentation, certifications and labelling for your destination country.", icon: "shield" },
  { n: "03", title: "Packaging", text: "Export-grade packaging formats for long shelf life in transit.", icon: "box" },
  { n: "04", title: "Shipping", text: "Logistics coordinated door to port, with full tracking.", icon: "truck" },
];

const CATEGORIES = [
  "Snacks & Namkeen",
  "Breakfast & Grain Mixes",
  "Ready-to-Eat Bowls",
  "Daily Shots",
  "Teas & Beverages",
  "Herbal & Ayurvedic Products",
];

export default function ExportPage() {
  return (
    <main>
      <section className="bg-white overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-[4vw] py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll>
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-5">Global Export</p>
            <h1 className="font-display text-editorial-hero leading-[1.05] text-ivar-ink mb-5">
              Indian Goodness, <span className="italic text-ivar-green">Exported to the World.</span>
            </h1>
            <p className="text-editorial-body text-ivar-muted max-w-[480px] mb-8">
              Ivar's snacks, ready-to-eat formats and everyday essentials — packaged, certified and shipped for
              international markets.
            </p>
            <Link
              href="/contact?type=export"
              className="group inline-flex items-center gap-3 bg-ivar-forest text-white text-[14px] font-semibold rounded-full pl-6 pr-5 py-3.5 hover:bg-ivar-forestDeep transition-colors"
            >
              Enquire About Export
              <LineIcon name="arrow" size={16} stroke={2} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </RevealOnScroll>

          <RevealOnScroll y={0} delay={0.1} className="relative aspect-[4/5] lg:aspect-[4/4.5] overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/hero-grain-bowl.jpg" alt="Ivar products ready for export" className="w-full h-full object-cover" />
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-ivar-cream py-16 md:py-24">
        <div className="max-w-[1320px] mx-auto px-[6vw]">
          <RevealOnScroll className="max-w-[640px] mb-12 md:mb-16">
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">Why Export With Ivar</p>
            <h2 className="font-display text-editorial-section leading-[1.1] text-ivar-ink">
              Built for International Shelves.
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {PILLARS.map((p, i) => (
              <RevealOnScroll key={p.title} delay={i * 0.08} className="bg-white rounded-xl p-6 border border-ivar-forest/10">
                <span className="size-11 rounded-full border border-ivar-forest/25 text-ivar-forest flex items-center justify-center mb-5">
                  <LineIcon name={p.icon} size={18} stroke={1.6} />
                </span>
                <h3 className="font-semibold text-[15px] text-ivar-ink mb-2">{p.title}</h3>
                <p className="text-[13px] leading-relaxed text-ivar-muted">{p.text}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline eyebrow="How Export Works" title="From enquiry to your port, in four steps." steps={PROCESS_STEPS} dark />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1320px] mx-auto px-[6vw]">
          <RevealOnScroll className="max-w-[640px] mb-10 md:mb-12">
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">Export Catalogue</p>
            <h2 className="font-display text-editorial-section leading-[1.1] text-ivar-ink">
              Categories Available for Export.
            </h2>
          </RevealOnScroll>
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((c) => (
              <span
                key={c}
                className="px-5 py-2.5 rounded-full border border-ivar-forest/20 text-[13px] font-medium text-ivar-ink"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <DarkCTA
        img="/assets/products/eat/pantry-collection.png"
        eyebrow="Importers & Distributors"
        title="Looking to Bring Ivar to Your Market?"
        text="Share your country, target categories and expected volumes — our export team will get back with pricing and MOQs."
        cta="Start an Export Enquiry"
        ctaHref="/contact?type=export"
        align="center"
      />
    </main>
  );
}
