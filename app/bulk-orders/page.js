import PageHeader from "../components/PageHeader";
import RevealOnScroll from "../components/RevealOnScroll";
import LineIcon from "../components/LineIcon";
import { buildWhatsAppLink } from "../lib/whatsapp";

export const metadata = {
  title: "Bulk & Custom Orders — Ivar™",
  description: "Custom product combinations, company branding and volume pricing for large orders.",
  alternates: { canonical: "/bulk-orders" },
};

const WHY = [
  { icon: "box", title: "Custom Combinations", text: "Mix and match products from across our range into one order." },
  { icon: "shield", title: "Private-Label Branding", text: "Add your company's name or logo tag on packaging, on request." },
  { icon: "scope", title: "Volume Pricing", text: "Tiered pricing as your order quantity scales up." },
  { icon: "people", title: "Dedicated Support", text: "A single point of contact from enquiry to delivery." },
];

export default function BulkOrdersPage() {
  const waLink = buildWhatsAppLink("Hi Ivar 🌿 I'd like to enquire about a bulk or custom order.");

  return (
    <main>
      <PageHeader
        eyebrow="Bulk & Custom Orders"
        title="Built Around Your Order."
        subtitle="Custom product combinations, company branding and volume pricing for large orders."
      />

      <section className="max-w-[1320px] mx-auto px-[6vw] py-10 md:py-16">
        <RevealOnScroll className="max-w-[640px] mb-10 md:mb-14">
          <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">Why Ivar</p>
          <h2 className="font-display text-[26px] md:text-[32px] text-ivar-ink">
            Flexible enough for any size order.
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
            <h3 className="font-display text-[22px] md:text-[26px] text-white mb-2">Have a bulk order in mind?</h3>
            <p className="text-white/70 text-[13.5px] max-w-[460px]">
              Share your product mix, quantity and any branding needs — we'll get back with pricing.
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
      </section>
    </main>
  );
}
