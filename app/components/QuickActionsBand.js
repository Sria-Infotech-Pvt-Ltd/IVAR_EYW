import Link from "next/link";
import RevealOnScroll from "./RevealOnScroll";
import LineIcon from "./LineIcon";

const ACTIONS = [
  {
    href: "/build",
    icon: "box",
    title: "Build a Box",
    text: "Mix bases, proteins and snacks into your own custom box.",
    cta: "Start building",
  },
  {
    href: "/planner",
    icon: "scope",
    title: "Wellness Planner",
    text: "A free nutrition check-in with daily targets and picks for you.",
    cta: "Get my plan",
  },
  {
    href: "/plans",
    icon: "truck",
    title: "Subscription Plans",
    text: "Pick your meals, set delivery days and save up to 15%.",
    cta: "See plans",
  },
  {
    href: "/corporate-orders",
    icon: "people",
    title: "Corporate Orders",
    text: "Daily meals for teams, offices and events — bulk pricing included.",
    cta: "Get a quote",
  },
];

export default function QuickActionsBand() {
  return (
    <section className="bg-ivar-cream py-16 md:py-24">
      <div className="max-w-[1500px] mx-auto px-[4vw]">
        <RevealOnScroll className="rounded-3xl bg-ivar-forest px-6 py-10 md:p-14">
          <div className="max-w-[560px] mb-10 md:mb-14">
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-sage font-semibold mb-4">
              Find Your Routine
            </p>
            <h2 className="font-display text-editorial-section leading-[1.1] text-white">
              Everyday food, built your way.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ACTIONS.map((a, i) => (
              <RevealOnScroll key={a.href} delay={i * 0.08}>
                <Link
                  href={a.href}
                  className="group block h-full rounded-2xl bg-white/[0.06] border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-colors"
                >
                  <span className="size-11 rounded-full bg-white/10 text-white flex items-center justify-center mb-6">
                    <LineIcon name={a.icon} size={19} stroke={1.6} />
                  </span>
                  <h3 className="font-display text-[19px] text-white mb-2">{a.title}</h3>
                  <p className="text-[13px] leading-relaxed text-white/60 mb-5">{a.text}</p>
                  <span className="inline-flex items-center gap-2 text-[13px] font-semibold text-ivar-sage">
                    {a.cta}
                    <LineIcon name="arrow" size={14} stroke={2.2} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
