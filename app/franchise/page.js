import LineIcon from "../components/LineIcon";
import RevealOnScroll from "../components/RevealOnScroll";
import ProcessTimeline from "../components/ProcessTimeline";
import DarkCTA from "../components/DarkCTA";

export const metadata = {
  title: "Franchise With Ivar — Ivar™",
  description: "Partner with Ivar — bring a trusted, India-rooted food brand to your city.",
  alternates: { canonical: "/franchise" },
};

const WHY = [
  { title: "Proven Brand", icon: "shield", text: "A recognisable, trusted name built on quality and consistency." },
  { title: "Sourcing & Supply Support", icon: "truck", text: "Access to the same traceable ingredients and suppliers." },
  { title: "Training Included", icon: "people", text: "Hands-on training for your team before and after launch." },
  { title: "Marketing Support", icon: "globe", text: "Brand assets, campaigns and launch support for your city." },
];

const PROCESS_STEPS = [
  { n: "01", title: "Enquiry", text: "Tell us your city and the format you're interested in.", icon: "search" },
  { n: "02", title: "Discussion", text: "We walk through investment, support and fit.", icon: "people" },
  { n: "03", title: "Agreement", text: "Finalise terms and onboarding plan.", icon: "check" },
  { n: "04", title: "Launch", text: "Training, setup and marketing support to go live.", icon: "globe" },
];

const PROFILE = [
  { title: "Food & Retail Experience", icon: "shield", text: "Prior experience running a food, retail or service business is a plus." },
  { title: "Local Market Knowledge", icon: "globe", text: "Understanding of your city's neighbourhoods and customer base." },
  { title: "Hands-On Involvement", icon: "people", text: "Willingness to be actively involved in day-to-day operations." },
  { title: "Growth Mindset", icon: "truck", text: "Ready to build and grow the brand in your market over time." },
];

const FAQS = [
  { q: "What format options are available?", a: "We offer a few formats depending on your city and budget — our team will walk you through options that fit." },
  { q: "What support does Ivar provide?", a: "Sourcing and supply access, staff training, brand assets and launch marketing support." },
  { q: "How long does onboarding take?", a: "Typically a few weeks from signed agreement to launch, depending on location readiness." },
  { q: "Is prior food industry experience required?", a: "It helps, but isn't mandatory — we provide training to get your team up to speed." },
];

export default function FranchisePage() {
  return (
    <main>
      <section className="bg-white overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-[4vw] py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll>
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-5">Franchise</p>
            <h1 className="font-display text-editorial-hero leading-[1.05] text-ivar-ink mb-5">
              Bring Ivar <span className="italic text-ivar-green">to Your City.</span>
            </h1>
            <p className="text-editorial-body text-ivar-muted max-w-[480px] mb-8">
              Partner with a food brand built on real Indian ingredients, honest sourcing and a growing
              customer base.
            </p>
            <a
              href="/contact?type=franchise"
              className="group inline-flex items-center gap-3 bg-ivar-forest text-white text-[14px] font-semibold rounded-full pl-6 pr-5 py-3.5 hover:bg-ivar-forestDeep transition-colors"
            >
              Enquire About Franchising
              <LineIcon name="arrow" size={16} stroke={2} className="transition-transform group-hover:translate-x-1" />
            </a>
          </RevealOnScroll>

          <RevealOnScroll y={0} delay={0.1} className="relative aspect-[4/5] lg:aspect-[4/4.5] overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/products/eat/franchise-partnership.png" alt="Partner with Ivar" className="w-full h-full object-cover" />
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-ivar-cream py-16 md:py-24">
        <div className="max-w-[1320px] mx-auto px-[6vw]">
          <RevealOnScroll className="max-w-[640px] mb-12 md:mb-16">
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">Why Partner With Ivar</p>
            <h2 className="font-display text-editorial-section leading-[1.1] text-ivar-ink">
              Built to support you from day one.
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY.map((w, i) => (
              <RevealOnScroll key={w.title} delay={i * 0.08} className="bg-white rounded-xl p-6 border border-ivar-forest/10">
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

      <ProcessTimeline eyebrow="How It Works" title="From enquiry to launch." steps={PROCESS_STEPS} dark />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1320px] mx-auto px-[6vw]">
          <RevealOnScroll className="max-w-[640px] mb-12 md:mb-16">
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">Who This Is For</p>
            <h2 className="font-display text-editorial-section leading-[1.1] text-ivar-ink">
              The ideal Ivar partner.
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROFILE.map((p, i) => (
              <RevealOnScroll key={p.title} delay={i * 0.08} className="bg-ivar-cream rounded-xl p-6 border border-ivar-forest/10">
                <span className="size-11 rounded-full border border-ivar-forest/25 text-ivar-forest flex items-center justify-center mb-5">
                  <LineIcon name={p.icon} size={18} stroke={1.6} />
                </span>
                <h3 className="font-semibold text-[14.5px] text-ivar-ink mb-1.5">{p.title}</h3>
                <p className="text-[12.5px] leading-relaxed text-ivar-muted">{p.text}</p>
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
              Franchising, answered.
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

      <DarkCTA
        img="/assets/hero-grain-bowl.jpg"
        eyebrow="Let's Talk"
        title="Interested in Franchising?"
        text="Share your city and background — our team will reach out with investment details and next steps."
        cta="Start Your Enquiry"
        ctaHref="/contact?type=franchise"
        align="center"
      />
    </main>
  );
}
