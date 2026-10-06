import RevealOnScroll from "./RevealOnScroll";

const STEPS = [
  { n: "01", title: "Choose", text: "Pick a product, build a box or start a wellness plan." },
  { n: "02", title: "Customise", text: "Set meals, quantities and delivery days to fit your routine." },
  { n: "03", title: "Delivered", text: "Fresh to your door, on schedule — every time." },
  { n: "04", title: "Repeat", text: "Pause, tweak or reorder anytime, right from your account." },
];

export default function HowItWorksSteps() {
  return (
    <section className="bg-ivar-cream py-16 md:py-24">
      <div className="max-w-[1320px] mx-auto px-[6vw]">
        <RevealOnScroll className="max-w-[640px] mb-14 md:mb-20">
          <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">
            How It Works
          </p>
          <h2 className="font-display text-editorial-section leading-[1.1] text-ivar-ink">
            Good food, in four simple steps.
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
          {STEPS.map((s, i) => (
            <RevealOnScroll key={s.n} delay={i * 0.1} className="relative">
              {i < STEPS.length - 1 && (
                <div
                  className="hidden md:block absolute top-[22px] left-[calc(50%+32px)] right-[calc(-50%+32px)] border-t-2 border-dashed border-ivar-forest/25"
                  aria-hidden="true"
                />
              )}
              <span className="relative z-10 size-11 rounded-full bg-ivar-forest text-white font-display text-[15px] flex items-center justify-center mb-5">
                {s.n}
              </span>
              <h3 className="font-display text-[19px] text-ivar-ink mb-1.5">{s.title}</h3>
              <p className="text-[13px] leading-relaxed text-ivar-muted max-w-[200px]">{s.text}</p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
