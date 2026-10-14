import Link from "next/link";
import RevealOnScroll from "../components/RevealOnScroll";
import LineIcon from "../components/LineIcon";
import { buildWhatsAppLink } from "../lib/whatsapp";

export const metadata = {
  title: "Corporate Gifting — Ivar™",
  description: "Festive, wholesome gift boxes for your team, clients and partners — the Ivar way.",
  alternates: { canonical: "/corporate-gifting" },
};

const BADGES = [
  { icon: "leaf", label: "Natural Ingredients" },
  { icon: "flask", label: "Rich in Nutrition" },
  { icon: "shield", label: "No Preservatives" },
  { icon: "heart", label: "Guilt Free Indulgence" },
];

const BOX_CONTENTS = [
  "Roasted Makhana — Himalayan Salt",
  "Roasted Makhana — Peri Peri",
  "Roasted Makhana — Pudina",
  "Almonds",
  "Cashews",
  "Pistachios",
  "Dry Fruit Laddu",
];

const WHY = [
  { icon: "people", title: "For Every Occasion", text: "Diwali, year-end appreciation, client thank-yous or onboarding kits." },
  { icon: "box", title: "Bulk & Customisable", text: "Mix contents, box design and quantities to fit your budget and headcount." },
  { icon: "truck", title: "Pan-India Delivery", text: "Shipped to your office or directly to each recipient's address." },
  { icon: "check", title: "Branded Options", text: "Add your company's name or logo tag to every box on request." },
];

export default function CorporateGiftingPage() {
  const waLink = buildWhatsAppLink("Hi Ivar 🌿 I'd like to enquire about corporate gifting boxes.");

  return (
    <main>
      <section className="bg-ivar-cream overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-[4vw] py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll>
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-5">Corporate Gifting</p>
            <h1 className="font-display text-editorial-hero leading-[1.05] text-ivar-ink mb-5">
              Diwali Gifting <span className="italic text-ivar-green">That Cares.</span>
            </h1>
            <p className="text-editorial-body text-ivar-muted max-w-[480px]">
              Wholesome snacks, premium taste — for healthier celebrations. Thoughtful gift boxes for your team, clients and partners.
            </p>
          </RevealOnScroll>

          <RevealOnScroll y={0} delay={0.1} className="relative aspect-square md:aspect-[4/3.6] rounded-2xl overflow-hidden bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/corporate-gifting-diwali-box.jpeg"
              alt="Ivar Diwali corporate gifting box"
              className="w-full h-full object-contain p-3"
            />
          </RevealOnScroll>
        </div>
      </section>

      <section className="max-w-[1320px] mx-auto px-[6vw] py-10 md:py-16">
        <RevealOnScroll className="max-w-[720px] mb-16 md:mb-20">
          <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">What's In The Box</p>
          <h2 className="font-display text-[26px] md:text-[32px] text-ivar-ink mb-6">
            A curated mix of our best, in every box.
          </h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {BOX_CONTENTS.map((item) => (
              <span key={item} className="px-4 py-2 rounded-full border border-ivar-forest/20 text-[12.5px] font-medium text-ivar-ink">
                {item}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-9">
            {BADGES.map((b) => (
              <div key={b.label} className="flex items-center gap-2.5">
                <span className="size-9 rounded-full border border-ivar-forest/25 text-ivar-forest flex items-center justify-center shrink-0">
                  <LineIcon name={b.icon} size={16} stroke={1.6} />
                </span>
                <span className="text-[12.5px] text-ivar-muted leading-tight">{b.label}</span>
              </div>
            ))}
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-ivar-forest text-white font-semibold text-sm rounded-full px-7 py-3.5 hover:bg-ivar-forestDeep transition-colors"
          >
            Enquire Now
            <LineIcon name="arrow" size={16} stroke={2} />
          </a>
        </RevealOnScroll>

        <RevealOnScroll className="max-w-[640px] mb-10 md:mb-14">
          <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">Why Gift Ivar</p>
          <h2 className="font-display text-[26px] md:text-[32px] text-ivar-ink">
            Built for corporate gifting at any scale.
          </h2>
        </RevealOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 md:mb-20">
          {WHY.map((w, i) => (
            <RevealOnScroll key={w.title} delay={i * 0.08} className="bg-ivar-cream rounded-xl p-6 border border-ivar-forest/10">
              <span className="size-11 rounded-full border border-ivar-forest/25 text-ivar-forest flex items-center justify-center mb-5">
                <LineIcon name={w.icon} size={18} stroke={1.6} />
              </span>
              <h3 className="font-semibold text-[14.5px] text-ivar-ink mb-1.5">{w.title}</h3>
              <p className="text-[12.5px] leading-relaxed text-ivar-muted">{w.text}</p>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="rounded-2xl bg-ivar-forest p-8 md:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="font-display text-[22px] md:text-[26px] text-white mb-2">Planning a gifting order for your team?</h3>
            <p className="text-white/70 text-[13.5px] max-w-[460px]">
              Share your headcount, occasion and budget — our team will put together a proposal for you.
            </p>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 inline-flex items-center gap-3 bg-white text-ivar-forest font-semibold text-sm rounded-full px-7 py-3.5 hover:bg-ivar-sage transition-colors"
          >
            Enquire Now
            <LineIcon name="arrow" size={16} stroke={2} />
          </a>
        </RevealOnScroll>

        <p className="text-center text-[12.5px] text-ivar-muted mt-10">
          Looking for daily team meals instead?{" "}
          <Link href="/corporate-orders" className="text-ivar-forest font-medium underline underline-offset-4">
            See Corporate Orders
          </Link>
        </p>
      </section>
    </main>
  );
}
