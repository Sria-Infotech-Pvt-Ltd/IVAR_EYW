import Link from "next/link";
import RevealOnScroll from "./RevealOnScroll";
import LineIcon from "./LineIcon";

// Shared page hero — eyebrow + title + subtitle + optional CTA on the left,
// a rounded photo on the right. This is the single hero pattern for every
// page, replacing both the full-bleed dark-overlay hero and the plain
// no-image hero that used to vary from page to page.
export default function SplitHero({
  eyebrow,
  title,
  subtitle,
  cta,
  ctaHref,
  ctaExternal = false,
  img,
  imgAlt = "",
  bg = "bg-white",
}) {
  return (
    <section className={`${bg} overflow-hidden`}>
      <div className="max-w-[1500px] mx-auto px-[4vw] py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <RevealOnScroll>
          {eyebrow && (
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-5">{eyebrow}</p>
          )}
          <h1 className="font-display text-editorial-hero leading-[1.05] text-ivar-ink mb-5">{title}</h1>
          {subtitle && <p className="text-editorial-body text-ivar-muted max-w-[460px] mb-8">{subtitle}</p>}
          {cta && ctaHref && (
            <Link
              href={ctaHref}
              target={ctaExternal ? "_blank" : undefined}
              rel={ctaExternal ? "noreferrer" : undefined}
              className="group inline-flex items-center gap-3 bg-ivar-forest text-white text-[14px] font-semibold rounded-full pl-6 pr-5 py-3.5 hover:bg-ivar-forestDeep transition-colors"
            >
              {cta}
              <LineIcon name="arrow" size={16} stroke={2} className="transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </RevealOnScroll>

        <RevealOnScroll y={0} delay={0.1} className="relative aspect-[4/5] lg:aspect-[4/4.5] overflow-hidden rounded-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img} alt={imgAlt} className="w-full h-full object-cover" />
        </RevealOnScroll>
      </div>
    </section>
  );
}
