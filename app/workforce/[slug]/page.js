"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import LineIcon from "../../components/LineIcon";
import RevealOnScroll from "../../components/RevealOnScroll";
import DarkCTA from "../../components/DarkCTA";
import { WORKFORCE_ROLES, workforceRoleBySlug } from "../../data/workforceRoles";

export default function WorkforceRolePage() {
  const params = useParams();
  const role = workforceRoleBySlug(params.slug);

  if (!role) notFound();

  return (
    <main>
      <section className="bg-ivar-forest py-14 md:py-16">
        <div className="max-w-[1320px] mx-auto px-[6vw] w-full">
          <nav aria-label="Breadcrumb" className="text-[12px] text-white/60 flex items-center gap-2 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">›</span>
            <Link href="/workforce" className="hover:text-white">Workforce</Link>
            <span aria-hidden="true">›</span>
            <span className="text-white">{role.title}</span>
          </nav>
          <div className="flex items-center gap-4 mb-5">
            <span className="size-12 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0">
              <LineIcon name={role.icon} size={20} stroke={1.6} />
            </span>
            <h1 className="font-display text-[32px] md:text-[46px] leading-[1.08] text-white">{role.title}</h1>
          </div>
          <p className="text-white/70 text-base md:text-lg max-w-[560px]">{role.summary}</p>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="max-w-[1320px] mx-auto px-[6vw] grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16">
          <RevealOnScroll>
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">What This Role Covers</p>
            <h2 className="font-display text-editorial-section leading-[1.1] text-ivar-ink mb-6">
              {role.text}.
            </h2>
            <ul className="space-y-3">
              {role.responsibilities.map((r) => (
                <li key={r} className="flex items-start gap-3 text-[14.5px] text-ivar-muted">
                  <LineIcon name="check" size={16} stroke={2.2} className="text-ivar-forest shrink-0 mt-0.5" />
                  {r}
                </li>
              ))}
            </ul>
          </RevealOnScroll>

          <RevealOnScroll delay={0.08} className="bg-ivar-cream rounded-2xl p-7">
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">Other Roles</p>
            <div className="flex flex-col gap-1">
              {WORKFORCE_ROLES.filter((r) => r.slug !== role.slug).map((r) => (
                <Link
                  key={r.slug}
                  href={`/workforce/${r.slug}`}
                  className="flex items-center gap-3 py-2.5 border-b border-ivar-forest/10 last:border-b-0 text-[13.5px] text-ivar-ink/75 hover:text-ivar-forest transition-colors"
                >
                  <LineIcon name={r.icon} size={15} stroke={1.8} />
                  {r.title}
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <DarkCTA
        img="/assets/ivar-workforce.jpeg"
        eyebrow="Ivar Workforce · Coming Soon"
        title={`Need ${role.title}?`}
        text="Ivar Workforce is launching soon. Share your headcount and location and we'll reach out as soon as we're live."
        cta="Register Interest"
        ctaHref={`/contact?type=workforce-hiring&role=${role.slug}`}
        align="center"
      />
    </main>
  );
}
