import Link from "next/link";
import LineIcon from "../components/LineIcon";
import RevealOnScroll from "../components/RevealOnScroll";
import DarkCTA from "../components/DarkCTA";
import { buildWhatsAppLink } from "../lib/whatsapp";

export const metadata = {
  title: "Find Ivar — Ivar™",
  description: "Order Ivar online, on WhatsApp, or find it at our delivery partners — clean food, always near you.",
  alternates: { canonical: "/find-ivar" },
};

const WAYS = [
  {
    icon: "bag",
    title: "Order Online",
    text: "Browse the full menu and checkout in minutes, delivered to your door.",
    cta: "Shop Now",
    href: "/shop",
  },
  {
    icon: "search",
    title: "Order on WhatsApp",
    text: "Message us your order and we'll confirm availability, pricing and delivery time.",
    cta: "Chat on WhatsApp",
    href: buildWhatsAppLink("Hi Ivar 🌿 I'd like to place an order."),
    external: true,
  },
  {
    icon: "truck",
    title: "Subscription Delivery",
    text: "Set up a weekly or monthly plan and have Ivar delivered on schedule.",
    cta: "See Plans",
    href: "/plans",
  },
];

const CITIES = ["Hyderabad", "Secunderabad", "Bengaluru", "Chennai", "Pune", "Mumbai"];

const WHY = [
  { icon: "leaf", title: "Natural Ingredients", text: "No artificial additives — real ingredients, every time." },
  { icon: "shield", title: "No Preservatives", text: "Nothing added just to extend shelf life." },
  { icon: "globe", title: "Traceable Sourcing", text: "Every ingredient linked back to its region of origin." },
  { icon: "box", title: "Sustainable Packaging", text: "Food-safe formats designed to reduce waste." },
];

const FAQS = [
  { q: "How long does delivery take?", a: "Most orders arrive within 24–48 hours of confirmation, depending on your city and the items ordered." },
  { q: "Is there a minimum order value?", a: "No minimum for online orders. Subscription plans and corporate/event orders have their own minimums." },
  { q: "Can I order outside the listed cities?", a: "Message us on WhatsApp with your pin code — we're adding delivery areas regularly and can confirm availability." },
  { q: "What if an item arrives damaged?", a: "Reach out within 24 hours of delivery with a photo and we'll replace or refund it." },
];

export default function FindIvarPage() {
  return (
    <main>
      <section className="bg-white overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-[4vw] py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll>
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-5">Find Ivar</p>
            <h1 className="font-display text-editorial-hero leading-[1.05] text-ivar-ink mb-5">
              Good Food, <span className="italic text-ivar-green">Always Near You.</span>
            </h1>
            <p className="text-editorial-body text-ivar-muted max-w-[460px] mb-8">
              Clean, natural Indian food — ordered online, on WhatsApp, or on a subscription that fits your routine.
            </p>
            <Link
              href="/shop"
              className="group inline-flex items-center gap-3 bg-ivar-forest text-white text-[14px] font-semibold rounded-full pl-6 pr-5 py-3.5 hover:bg-ivar-forestDeep transition-colors"
            >
              Explore the Menu
              <LineIcon name="arrow" size={16} stroke={2} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </RevealOnScroll>

          <RevealOnScroll y={0} delay={0.1} className="relative aspect-[4/5] lg:aspect-[4/4.5] overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/products/eat/find-ivar-hero.png" alt="Ivar delivered fresh" className="w-full h-full object-cover" />
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-ivar-cream py-16 md:py-24">
        <div className="max-w-[1320px] mx-auto px-[6vw]">
          <RevealOnScroll className="max-w-[640px] mb-12 md:mb-16">
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">Ways to Get Ivar</p>
            <h2 className="font-display text-editorial-section leading-[1.1] text-ivar-ink">
              Pick how you'd like to order.
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {WAYS.map((w, i) => (
              <RevealOnScroll key={w.title} delay={i * 0.08} className="bg-white rounded-2xl p-7 border border-ivar-forest/10">
                <span className="size-11 rounded-full border border-ivar-forest/25 text-ivar-forest flex items-center justify-center mb-5">
                  <LineIcon name={w.icon} size={18} stroke={1.6} />
                </span>
                <h3 className="font-display text-[19px] text-ivar-ink mb-2">{w.title}</h3>
                <p className="text-[13px] leading-relaxed text-ivar-muted mb-5">{w.text}</p>
                <a
                  href={w.href}
                  target={w.external ? "_blank" : undefined}
                  rel={w.external ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-[13px] font-semibold text-ivar-forest hover:underline"
                >
                  {w.cta}
                  <LineIcon name="arrow" size={13} stroke={2.2} />
                </a>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1320px] mx-auto px-[6vw]">
          <RevealOnScroll className="max-w-[640px] mb-12 md:mb-16">
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">Why Order From Ivar</p>
            <h2 className="font-display text-editorial-section leading-[1.1] text-ivar-ink">
              Good food you can trust.
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>
      </section>

      <section className="bg-ivar-cream py-16 md:py-24">
        <div className="max-w-[900px] mx-auto px-[6vw]">
          <RevealOnScroll className="max-w-[640px] mb-10 md:mb-14">
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">Common Questions</p>
            <h2 className="font-display text-editorial-section leading-[1.1] text-ivar-ink">
              Ordering, answered.
            </h2>
          </RevealOnScroll>
          <div className="divide-y divide-ivar-forest/10 border-t border-b border-ivar-forest/10">
            {FAQS.map((f, i) => (
              <RevealOnScroll key={f.q} delay={i * 0.06} className="py-6">
                <h3 className="font-semibold text-[15px] text-ivar-ink mb-2">{f.q}</h3>
                <p className="text-[13.5px] leading-relaxed text-ivar-muted">{f.a}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[1320px] mx-auto px-[6vw] text-center">
          <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">Delivery Cities</p>
          <h2 className="font-display text-[26px] md:text-[32px] text-ivar-ink mb-8">Currently delivering to</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {CITIES.map((c) => (
              <span key={c} className="px-5 py-2.5 rounded-full border border-ivar-forest/20 text-[13px] font-medium text-ivar-ink">
                {c}
              </span>
            ))}
          </div>
          <p className="text-[12.5px] text-ivar-muted mt-6">More cities coming soon — ask us on WhatsApp if yours isn't listed yet.</p>
        </div>
      </section>

      <DarkCTA
        img="/assets/products/eat/find-ivar-delivery.png"
        eyebrow="Bring Ivar To You"
        title="Not in Your City Yet?"
        text="Tell us where you are — it helps us prioritise where to deliver and partner with next."
        cta="Get in Touch"
        ctaHref="/contact"
        align="center"
        overlay="bg-gradient-to-b from-ivar-forestDeep/25 via-ivar-forestDeep/65 to-ivar-forestDeep/20"
      />
    </main>
  );
}
