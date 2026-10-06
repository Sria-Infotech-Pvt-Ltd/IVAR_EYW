import RevealOnScroll from "./RevealOnScroll";
import LineIcon from "./LineIcon";

const ROWS = [
  { outside: "Mystery sourcing, hard to trace", ivar: "Traceable Indian sourcing, every ingredient" },
  { outside: "Preservatives for shelf life", ivar: "No artificial additives — real ingredients" },
  { outside: "Quality that varies batch to batch", ivar: "Quality checked at every stage" },
  { outside: "One-off snacks, no routine", ivar: "Boxes, plans and a wellness planner in one place" },
  { outside: "Packaging as an afterthought", ivar: "Sustainable, food-safe packaging by design" },
];

export default function ComparisonSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1100px] mx-auto px-[6vw]">
        <RevealOnScroll className="max-w-[640px] mb-12 md:mb-16">
          <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">
            The Ivar Difference
          </p>
          <h2 className="font-display text-editorial-section leading-[1.1] text-ivar-ink">
            All the craving. None of the compromise.
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="rounded-2xl border border-[#ece8da] overflow-hidden">
          <div className="grid grid-cols-2">
            <div className="px-5 md:px-8 py-4 border-b border-[#ece8da]">
              <p className="text-[11px] tracking-[0.15em] uppercase text-ivar-muted font-semibold">
                Usual Packaged Food
              </p>
            </div>
            <div className="px-5 md:px-8 py-4 border-b border-ivar-forestDeep bg-ivar-forest">
              <p className="text-[11px] tracking-[0.15em] uppercase text-ivar-sage font-semibold">
                The Ivar Way
              </p>
            </div>
          </div>

          {ROWS.map((row, i) => (
            <div key={i} className="grid grid-cols-2">
              <div
                className={`flex items-center gap-3 px-5 md:px-8 py-4 md:py-5 ${
                  i < ROWS.length - 1 ? "border-b border-[#ece8da]" : ""
                }`}
              >
                <span className="size-6 rounded-full bg-[#F4EFE3] text-[#9a9f9a] flex items-center justify-center shrink-0">
                  <span className="text-[13px] leading-none">×</span>
                </span>
                <p className="text-[13px] md:text-[14px] text-ivar-muted">{row.outside}</p>
              </div>
              <div
                className={`flex items-center gap-3 px-5 md:px-8 py-4 md:py-5 bg-ivar-forest ${
                  i < ROWS.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                <span className="size-6 rounded-full bg-ivar-sage/20 text-ivar-sage flex items-center justify-center shrink-0">
                  <LineIcon name="check" size={12} stroke={2.6} />
                </span>
                <p className="text-[13px] md:text-[14px] text-white font-medium">{row.ivar}</p>
              </div>
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
