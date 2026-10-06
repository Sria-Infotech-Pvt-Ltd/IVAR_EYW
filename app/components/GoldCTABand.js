import Link from "next/link";
import RevealOnScroll from "./RevealOnScroll";
import LineIcon from "./LineIcon";

export default function GoldCTABand() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1500px] mx-auto px-[4vw]">
        <RevealOnScroll className="relative overflow-hidden rounded-3xl bg-ivar-forest px-6 py-12 md:px-14 md:py-16">
          <div
            className="absolute -top-16 -right-16 size-56 rounded-full bg-white/5"
            aria-hidden="true"
          />
          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-[560px]">
              <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-gold font-semibold mb-4">
                Bring Ivar To You
              </p>
              <h2 className="font-display text-[28px] md:text-[38px] leading-[1.1] text-white mb-4">
                Hosting an event? Let&apos;s Ivar it.
              </h2>
              <p className="text-[14.5px] leading-relaxed text-white/70 max-w-[460px]">
                Office parties, corporate off-sites or a community gathering — bulk orders, corporate
                gifting and custom catering, sorted.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/corporate-orders"
                className="inline-flex items-center gap-2.5 bg-ivar-gold text-ivar-forestDeep font-semibold text-[13px] rounded-full px-6 py-3.5 hover:bg-white transition-colors"
              >
                Get Corporate Pricing
                <LineIcon name="arrow" size={14} stroke={2.2} />
              </Link>
              <Link
                href="/plans"
                className="inline-flex items-center gap-2.5 border border-white/30 text-white font-semibold text-[13px] rounded-full px-6 py-3.5 hover:bg-white/10 transition-colors"
              >
                See Plans
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
