import Link from "next/link";
import RevealOnScroll from "../components/RevealOnScroll";
import LineIcon from "../components/LineIcon";
import { buildWhatsAppLink } from "../lib/whatsapp";

export const metadata = {
  title: "Celebration & Wedding Gifts — Ivar™",
  description: "Wedding favours, return gifts, birthday hampers and bulk celebration orders — the Ivar way.",
  alternates: { canonical: "/celebration-gifts" },
};

const WHY = [
  { icon: "heart", title: "Wedding Favours", text: "Elegant, bite-sized hampers guests actually enjoy taking home." },
  { icon: "box", title: "Return Gifts", text: "Birthday and function return gifts, packed and priced for bulk." },
  { icon: "people", title: "Any Guest Count", text: "From an intimate gathering to a full wedding guest list." },
  { icon: "truck", title: "Pan-India Delivery", text: "Delivered to your venue or shipped directly to your guest list." },
];

export default function CelebrationGiftsPage() {
  const waLink = buildWhatsAppLink("Hi Ivar 🌿 I'd like to enquire about celebration/wedding gifts.");

  return (
    <main>
      <section className="bg-ivar-cream overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-[4vw] py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll>
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-5">Celebration & Wedding Gifts</p>
            <h1 className="font-display text-editorial-hero leading-[1.05] text-ivar-ink mb-5">
              Gifts Worth <span className="italic text-ivar-green">Celebrating.</span>
            </h1>
            <p className="text-editorial-body text-ivar-muted max-w-[480px]">
              Wedding favours, return gifts and birthday hampers — wholesome, elegant and ready for bulk orders.
            </p>
          </RevealOnScroll>

          <RevealOnScroll y={0} delay={0.1} className="relative aspect-square md:aspect-[4/3.6] rounded-2xl overflow-hidden bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/corporate-gifting-diwali-box.jpeg"
              alt="Ivar celebration gift hamper"
              className="w-full h-full object-contain p-3"
            />
          </RevealOnScroll>
        </div>
      </section>

      <section className="max-w-[1320px] mx-auto px-[6vw] py-10 md:py-16">
        <RevealOnScroll className="max-w-[640px] mb-10 md:mb-14">
          <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">Why Ivar</p>
          <h2 className="font-display text-[26px] md:text-[32px] text-ivar-ink">
            Made for celebrations, big or small.
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
            <h3 className="font-display text-[22px] md:text-[26px] text-white mb-2">Planning a wedding or celebration?</h3>
            <p className="text-white/70 text-[13.5px] max-w-[460px]">
              Share your guest count and date — our team will put together a favours proposal for you.
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
          Looking for corporate gifting instead?{" "}
          <Link href="/corporate-gifting" className="text-ivar-forest font-medium underline underline-offset-4">
            See Corporate Gifting
          </Link>
        </p>
      </section>
    </main>
  );
}
