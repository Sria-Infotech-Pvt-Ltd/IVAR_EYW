import Link from "next/link";
import RevealOnScroll from "../components/RevealOnScroll";
import LineIcon from "../components/LineIcon";
import { buildWhatsAppLink } from "../lib/whatsapp";

export const metadata = {
  title: "Gift Hampers — Ivar™",
  description: "Wholesome gift hampers for every occasion — festive, corporate, celebrations and more.",
  alternates: { canonical: "/gift-hampers" },
};

const OCCASIONS = [
  {
    title: "Corporate Gifting",
    text: "Employee gifts, client gifts, Diwali hampers and festive gifting.",
    icon: "box",
    href: "/corporate-gifting",
  },
  {
    title: "Celebration & Wedding Gifts",
    text: "Wedding favours, return gifts, birthday hampers and bulk celebration orders.",
    icon: "heart",
    href: "/celebration-gifts",
  },
  {
    title: "Bulk & Custom Orders",
    text: "Custom product combinations, company branding and volume pricing.",
    icon: "truck",
    href: "/bulk-orders",
  },
];

export default function GiftHampersPage() {
  const waLink = buildWhatsAppLink("Hi Ivar 🌿 I'd like to enquire about a gift hamper.");

  return (
    <main>
      <section className="bg-ivar-cream overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-[4vw] py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll y={0} className="relative aspect-square md:aspect-[4/3.6] rounded-2xl overflow-hidden bg-white lg:order-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/corporate-gifting-diwali-box.jpeg"
              alt="Ivar gift hamper"
              className="w-full h-full object-contain p-3"
            />
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="lg:order-2">
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-5">Gift Hampers</p>
            <h1 className="font-display text-editorial-hero leading-[1.05] text-ivar-ink mb-5">
              Wholesome Gifting, <span className="italic text-ivar-green">Every Occasion.</span>
            </h1>
            <p className="text-editorial-body text-ivar-muted max-w-[480px]">
              Thoughtfully put together hampers of Ivar's best — for festivals, families, teams and celebrations.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="max-w-[1320px] mx-auto px-[6vw] py-10 md:py-16">
        <RevealOnScroll className="max-w-[640px] mb-10 md:mb-14">
          <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">Choose An Occasion</p>
          <h2 className="font-display text-[26px] md:text-[32px] text-ivar-ink">
            Find the right hamper for the moment.
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 md:mb-20">
          {OCCASIONS.map((o) => (
            <Link
              key={o.title}
              href={o.href}
              className="group bg-white rounded-2xl p-6 border border-ivar-forest/10 hover:shadow-[0_10px_28px_rgba(11,53,31,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <span className="size-11 rounded-full border border-ivar-forest/25 text-ivar-forest flex items-center justify-center mb-5">
                <LineIcon name={o.icon} size={18} stroke={1.6} />
              </span>
              <h3 className="font-display text-[18px] text-ivar-ink mb-1.5">{o.title}</h3>
              <p className="text-[12.5px] leading-relaxed text-ivar-muted mb-4 flex-1">{o.text}</p>
              <span className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-ivar-forest">
                Explore
                <LineIcon name="arrow" size={13} stroke={2.2} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <RevealOnScroll className="rounded-2xl bg-ivar-forest p-8 md:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="font-display text-[22px] md:text-[26px] text-white mb-2">Just want a one-off hamper?</h3>
            <p className="text-white/70 text-[13.5px] max-w-[460px]">
              Tell us the occasion and who it's for — we'll suggest a hamper that fits.
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
