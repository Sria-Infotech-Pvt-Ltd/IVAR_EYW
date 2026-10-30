import Link from "next/link";
import RevealOnScroll from "./RevealOnScroll";
import LineIcon from "./LineIcon";

// The primary action gets a real featured panel (photo + overlay copy);
// the rest sit beside it as a compact stacked list — not three identical
// boxes repeating the same shape and weight.
const FEATURED = {
  href: "/build",
  icon: "box",
  title: "Build a Box",
  text: "Mix bases, proteins and snacks into your own custom box — calories and price update live.",
  cta: "Start building",
  img: "/assets/products/eat/ready-to-cook-upma.png",
};

const LIST_ACTIONS = [
  {
    href: "/planner",
    icon: "scope",
    title: "Nutrition Planner",
    text: "A free nutrition check-in with daily targets and picks for you.",
  },
  {
    href: "/plans",
    icon: "truck",
    title: "Subscription Plans",
    text: "Pick your meals, set delivery days and save up to 15%.",
  },
];

export default function QuickActionsBand() {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="max-w-[1200px] mx-auto px-[15px] md:px-[50px]">
        <div className="mb-8 md:mb-10">
          <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-3">
            Find Your Routine
          </p>
          <h2 className="text-[28px] md:text-[34px] font-normal text-ivar-ink leading-tight">
            Everyday food, built your way.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-4 md:gap-5">
          <RevealOnScroll>
            <Link
              href={FEATURED.href}
              className="group relative block h-full min-h-[320px] overflow-hidden"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={FEATURED.img}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ivar-ink/85 via-ivar-ink/35 to-transparent" />

              <div className="relative h-full flex flex-col justify-end p-7 md:p-9">
                <span className="size-10 rounded-full bg-white/15 text-white flex items-center justify-center mb-5">
                  <LineIcon name={FEATURED.icon} size={17} stroke={1.6} />
                </span>
                <h3 className="text-[22px] md:text-[26px] text-white mb-2">{FEATURED.title}</h3>
                <p className="text-[13.5px] leading-relaxed text-white/75 max-w-[360px] mb-5">{FEATURED.text}</p>
                <span className="inline-flex w-max items-center gap-2 px-5 h-10 bg-white text-ivar-ink text-[13px] font-semibold">
                  {FEATURED.cta}
                  <LineIcon name="arrow" size={14} stroke={2.2} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </RevealOnScroll>

          <div className="flex flex-col divide-y divide-black/8 border border-black/8">
            {LIST_ACTIONS.map((a, i) => (
              <RevealOnScroll key={a.href} delay={i * 0.08} className="flex-1">
                <Link
                  href={a.href}
                  className="group flex items-start gap-4 h-full p-6 hover:bg-ivar-surface transition-colors"
                >
                  <span className="size-10 rounded-full bg-ivar-surface border border-ivar-forest/15 text-ivar-forest flex items-center justify-center shrink-0">
                    <LineIcon name={a.icon} size={17} stroke={1.6} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[16px] text-ivar-ink mb-1.5">{a.title}</h3>
                    <p className="text-[12.5px] leading-relaxed text-ivar-slate/70">{a.text}</p>
                  </div>
                  <LineIcon
                    name="arrow"
                    size={14}
                    stroke={2.2}
                    className="ml-auto mt-1 shrink-0 text-ivar-forest transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
