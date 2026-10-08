import Link from "next/link";
import LineIcon from "../components/LineIcon";
import RevealOnScroll from "../components/RevealOnScroll";
import DarkCTA from "../components/DarkCTA";
import { WORKFORCE_ROLES } from "../data/workforceRoles";

export const metadata = {
  title: "Ivar Workforce — Ivar™",
  description: "Hire trained, verified chefs and food-service staff through Ivar Workforce — people, skills and opportunities for a stronger food ecosystem.",
  alternates: { canonical: "/workforce" },
};

const TRUST = [
  { title: "Verified Candidates", icon: "check" },
  { title: "Skilled & Trained Workforce", icon: "scope" },
  { title: "Reliable & On-Time", icon: "shield" },
  { title: "Flexible Staffing Solutions", icon: "link" },
  { title: "Supporting the Food & Service Industry", icon: "globe" },
];

export default function WorkforcePage() {
  return (
    <main>
      <section className="bg-white overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-[4vw] py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll>
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-5">
              Ivar Workforce · People | Skills | Opportunities
            </p>
            <h1 className="font-display text-editorial-hero leading-[1.05] text-ivar-ink mb-5">
              Right People <span className="italic text-ivar-green">for a Stronger Food Ecosystem.</span>
            </h1>
            <p className="text-editorial-body text-ivar-muted max-w-[480px] mb-8">
              Running a restaurant, cloud kitchen, café or food business? Ivar Workforce connects you with
              trained, verified staff — ready to work, from chefs to delivery partners.
            </p>
            <Link
              href="/contact?type=workforce-hiring"
              className="group inline-flex items-center gap-3 bg-ivar-forest text-white text-[14px] font-semibold rounded-full pl-6 pr-5 py-3.5 hover:bg-ivar-forestDeep transition-colors"
            >
              Hire Through Ivar Workforce
              <LineIcon name="arrow" size={16} stroke={2} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </RevealOnScroll>

          <RevealOnScroll y={0} delay={0.1} className="relative aspect-[4/5] lg:aspect-[4/4.5] overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/ivar-workforce.jpeg" alt="Ivar Workforce — chefs, packaging staff and delivery partners" className="w-full h-full object-cover" />
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-ivar-cream py-16 md:py-24">
        <div className="max-w-[1320px] mx-auto px-[6vw]">
          <RevealOnScroll className="max-w-[640px] mb-12 md:mb-16">
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">Roles We Staff</p>
            <h2 className="font-display text-editorial-section leading-[1.1] text-ivar-ink">
              Trained, Verified and Ready to Work.
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WORKFORCE_ROLES.map((r, i) => (
              <RevealOnScroll key={r.slug} delay={i * 0.06}>
                <Link
                  href={`/workforce/${r.slug}`}
                  className="group block h-full bg-white rounded-xl p-6 border border-ivar-forest/10 hover:border-ivar-forest/30 hover:shadow-[0_10px_28px_rgba(11,53,31,0.08)] transition-all"
                >
                  <span className="size-11 rounded-full border border-ivar-forest/25 text-ivar-forest flex items-center justify-center mb-5">
                    <LineIcon name={r.icon} size={18} stroke={1.6} />
                  </span>
                  <h3 className="font-semibold text-[14.5px] text-ivar-ink mb-1.5">{r.title}</h3>
                  <p className="text-[12.5px] leading-relaxed text-ivar-muted mb-3">{r.text}</p>
                  <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-ivar-forest">
                    View role
                    <LineIcon name="arrow" size={12} stroke={2.4} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivar-forest py-14 md:py-16">
        <div className="max-w-[1320px] mx-auto px-[6vw]">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 divide-x divide-white/10">
            {TRUST.map((t, i) => (
              <RevealOnScroll
                key={t.title}
                delay={i * 0.06}
                className={`flex flex-col items-center text-center gap-3 max-w-[140px] ${i > 0 ? "pl-10" : ""}`}
              >
                <span className="size-11 rounded-full bg-white/10 text-white flex items-center justify-center">
                  <LineIcon name={t.icon} size={18} stroke={1.6} />
                </span>
                <p className="text-[12.5px] font-medium text-white/85 leading-tight">{t.title}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <DarkCTA
        img="/assets/hero-couple-cooking.jpg"
        eyebrow="Building People Power"
        title="Connecting People With Opportunities."
        text="Share your role requirements, headcount and location — our workforce team will match you with verified, trained candidates."
        cta="Request Staff"
        ctaHref="/contact?type=workforce-hiring"
        align="center"
      />
    </main>
  );
}
