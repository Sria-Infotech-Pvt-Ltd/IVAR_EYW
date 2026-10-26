import Link from "next/link";
import LineIcon from "../components/LineIcon";
import RevealOnScroll from "../components/RevealOnScroll";
import ProcessTimeline from "../components/ProcessTimeline";
import DarkCTA from "../components/DarkCTA";
import { buildWhatsAppLink } from "../lib/whatsapp";

export const metadata = {
  title: "Book an Event — Ivar™",
  description: "Bring Ivar to your office offsite, celebration or community event — bulk orders and custom menus, sorted.",
  alternates: { canonical: "/book-event" },
};

const EVENT_TYPES = [
  { title: "Corporate Offsites", icon: "people", text: "Team meals, offsites and workshops — fed well, on schedule." },
  { title: "Weddings & Celebrations", icon: "heart", text: "Custom menus for family functions and celebrations." },
  { title: "College & Community Events", icon: "globe", text: "Bulk, budget-friendly menus for larger gatherings." },
  { title: "Pop-ups & Sampling", icon: "box", text: "Introduce Ivar to a new crowd with a sampling counter." },
];

const PROCESS_STEPS = [
  { n: "01", title: "Tell Us", text: "Share your event date, headcount and city.", icon: "search" },
  { n: "02", title: "Pick a Menu", text: "We suggest a menu based on your event type and budget.", icon: "box" },
  { n: "03", title: "Confirm", text: "Lock in quantities, timing and delivery logistics.", icon: "check" },
  { n: "04", title: "We Deliver", text: "Fresh, on time, set up and ready to serve.", icon: "truck" },
];

const INCLUDED = [
  { title: "Minimum 10 Guests", icon: "people", text: "Available for gatherings of 10 people and up." },
  { title: "Customisable Menus", icon: "box", text: "Mix and match from our full range to fit your event." },
  { title: "On-Site Setup", icon: "truck", text: "Delivered, arranged and ready to serve on arrival." },
  { title: "48-Hour Notice", icon: "check", text: "Book at least two days ahead for the smoothest planning." },
];

const FAQS = [
  { q: "What's the minimum group size?", a: "We cater events from 10 guests upward. For smaller gatherings, our regular Menu and Build-a-Box options work well too." },
  { q: "How far in advance should I book?", a: "At least 48 hours for most events. Larger events (100+ guests) are easiest with a week's notice." },
  { q: "Can you accommodate dietary preferences?", a: "Yes — let us know about vegetarian, non-veg, or allergy needs when you share your event details." },
  { q: "Do you handle serving staff and setup?", a: "We deliver food ready to serve; let us know if you'd like serving staff and we'll confirm availability for your city." },
];

export default function BookEventPage() {
  const waLink = buildWhatsAppLink("Hi Ivar 🌿 I'd like to book Ivar for an event.");

  return (
    <main>
      <section className="bg-white overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-[4vw] py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll>
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-5">Book an Event</p>
            <h1 className="font-display text-editorial-hero leading-[1.05] text-ivar-ink mb-5">
              Bring Ivar <span className="italic text-ivar-green">to Your Event.</span>
            </h1>
            <p className="text-editorial-body text-ivar-muted max-w-[480px] mb-8">
              From college lawns to corporate offsites and family celebrations — we serve good food people
              actually enjoy.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 bg-ivar-forest text-white text-[14px] font-semibold rounded-full pl-6 pr-5 py-3.5 hover:bg-ivar-forestDeep transition-colors"
            >
              Start Planning on WhatsApp
              <LineIcon name="arrow" size={16} stroke={2} className="transition-transform group-hover:translate-x-1" />
            </a>
          </RevealOnScroll>

          <RevealOnScroll y={0} delay={0.1} className="relative aspect-[4/5] lg:aspect-[4/4.5] overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/products/eat/kitchen-cooking.png" alt="Ivar at your event" className="w-full h-full object-cover" />
          </RevealOnScroll>
        </div>
      </section>

      <section className="bg-ivar-cream py-16 md:py-24">
        <div className="max-w-[1320px] mx-auto px-[6vw]">
          <RevealOnScroll className="max-w-[640px] mb-12 md:mb-16">
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">Events We Cater</p>
            <h2 className="font-display text-editorial-section leading-[1.1] text-ivar-ink">
              Good food, for every gathering.
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EVENT_TYPES.map((e, i) => (
              <RevealOnScroll key={e.title} delay={i * 0.08} className="bg-white rounded-xl p-6 border border-ivar-forest/10">
                <span className="size-11 rounded-full border border-ivar-forest/25 text-ivar-forest flex items-center justify-center mb-5">
                  <LineIcon name={e.icon} size={18} stroke={1.6} />
                </span>
                <h3 className="font-semibold text-[14.5px] text-ivar-ink mb-1.5">{e.title}</h3>
                <p className="text-[12.5px] leading-relaxed text-ivar-muted">{e.text}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline eyebrow="How Booking Works" title="From enquiry to event day." steps={PROCESS_STEPS} dark />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-[1320px] mx-auto px-[6vw]">
          <RevealOnScroll className="max-w-[640px] mb-12 md:mb-16">
            <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-forest font-semibold mb-4">What's Included</p>
            <h2 className="font-display text-editorial-section leading-[1.1] text-ivar-ink">
              Everything handled, start to finish.
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INCLUDED.map((i, idx) => (
              <RevealOnScroll key={i.title} delay={idx * 0.08} className="bg-ivar-cream rounded-xl p-6 border border-ivar-forest/10">
                <span className="size-11 rounded-full border border-ivar-forest/25 text-ivar-forest flex items-center justify-center mb-5">
                  <LineIcon name={i.icon} size={18} stroke={1.6} />
                </span>
                <h3 className="font-semibold text-[14.5px] text-ivar-ink mb-1.5">{i.title}</h3>
                <p className="text-[12.5px] leading-relaxed text-ivar-muted">{i.text}</p>
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
              Planning, answered.
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
        eyebrow="Bring Ivar To You"
        title="Hosting Something Soon?"
        text="Share your event date, headcount and city — we'll put together a menu and quote for you."
        cta="Book on WhatsApp"
        ctaHref={waLink}
        align="center"
      />
    </main>
  );
}
