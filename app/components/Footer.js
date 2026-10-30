"use client";

import Link from "next/link";
import LineIcon from "./LineIcon";

const COMMITMENTS = [
  { title: "Natural Ingredients", icon: "leaf", text: "No artificial additives — real ingredients, every time." },
  { title: "No Preservatives", icon: "shield", text: "Nothing added just to extend shelf life." },
  { title: "Traceable Sourcing", icon: "globe", text: "Every ingredient linked back to its region of origin." },
  { title: "Sustainable Packaging", icon: "box", text: "Food-safe formats designed to reduce waste." },
];

const primaryNav = [
  ["Home", "/"],
  ["Our Products", "/shop"],
  ["Gift Hampers", "/gift-hampers"],
  ["Corporate & Events", "/corporate-gifting"],
  ["Workforce Solutions", "/workforce"],
  ["Custom Packaging", "/packaging"],
  ["About IVAR", "/story"],
  ["Contact Us", "/contact"],
];

const explore = [
  ["Corporate Gifting", "/corporate-gifting"],
  ["Corporate Food Supply", "/corporate-orders"],
  ["Event Food & Refreshments", "/book-event"],
  ["Celebration & Wedding Gifts", "/celebration-gifts"],
  ["Bulk & Custom Orders", "/bulk-orders"],
  ["Build a Box", "/build"],
  ["AI Planner", "/planner"],
  ["Plans", "/plans"],
];

const legal = [
  ["Privacy Policy", "/contact"],
  ["Terms of Use", "/contact"],
  ["Cookie Policy", "/contact"],
  ["Disclaimer", "/contact"],
];

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
];

function SocialIcon({ name }) {
  const common = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  if (name === "linkedin") {
    return (
      <svg {...common}>
        <path d="M4.5 8.5h3v11h-3z" />
        <circle cx="6" cy="4.75" r="1.6" />
        <path d="M10.5 19.5v-11h3v1.6c.7-1.1 1.9-1.8 3.3-1.8 2.5 0 4.2 1.7 4.2 4.8v6.4h-3v-5.9c0-1.5-.6-2.4-1.9-2.4-1.1 0-1.9.8-2.2 1.6-.1.3-.1.6-.1 1v5.7z" />
      </svg>
    );
  }
  if (name === "instagram") {
    return (
      <svg {...common}>
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (name === "youtube") {
    return (
      <svg {...common}>
        <rect x="3" y="6" width="18" height="12" rx="3.5" />
        <path d="M10.5 9.8l5 2.2-5 2.2z" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M14.5 20.5v-7h2.3l.3-2.7h-2.6V9c0-.8.2-1.3 1.3-1.3h1.4V5.3c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.2-3.2 3.3v1.9H9.8v2.7h2.3v7z" />
    </svg>
  );
}

export default function Footer() {
  function subscribe(e) {
    e.preventDefault();
    alert("Thank you — you are on the Ivar community list (demo).");
  }

  return (
    <footer id="contact" className="bg-ivar-forestDeep text-white">
      <div className="max-w-[1500px] mx-auto px-[4vw] py-16 md:py-20 grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] gap-12">
        <div>
          <div className="h-12 w-[170px] mb-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/logo-wordmark.png" alt="Ivar" className="w-full h-full object-contain object-left" />
          </div>
          <p className="font-display text-[22px] leading-snug text-white max-w-[320px] mb-4">
            Good Food. Better Tomorrow.
          </p>
          <p className="text-white/60 text-[13.5px] max-w-[320px] mb-5">
            Get product launches, healthy-living ideas and Ivar updates.
          </p>
          <form onSubmit={subscribe} className="flex max-w-[360px]" suppressHydrationWarning>
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="flex-1 min-w-0 border border-white/20 bg-white/[0.06] px-4 py-3 rounded-l-full text-[13px] text-white placeholder:text-white/40 focus:outline-none focus:border-white/40"
              suppressHydrationWarning
            />
            <button
              className="shrink-0 inline-flex items-center gap-1.5 rounded-r-full px-5 py-3 font-semibold text-[13px] bg-ivar-gold text-ivar-forestDeep hover:bg-white transition-colors cursor-pointer"
              suppressHydrationWarning
            >
              Subscribe
            </button>
          </form>
          <div className="mt-7 space-y-1.5 text-[13.5px] text-white/60">
            <p>+91 97013 14138</p>
            <p>hello@ivarlife.com</p>
            <p>Hyderabad, Telangana, India</p>
          </div>
          <div className="flex gap-3 mt-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="size-9 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <SocialIcon name={s.icon} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[11px] tracking-[0.16em] uppercase text-ivar-sage mb-5">Quick Links</h4>
          <nav className="flex flex-col gap-3 text-[13.5px]">
            {primaryNav.map(([label, href]) => (
              <Link key={label} href={href} className="text-white/70 hover:text-white transition-colors w-fit">
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="text-[11px] tracking-[0.16em] uppercase text-ivar-sage mb-5">Explore</h4>
          <nav className="flex flex-col gap-3 text-[13.5px]">
            {explore.map(([label, href]) => (
              <Link key={label} href={href} className="text-white/70 hover:text-white transition-colors w-fit">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1500px] mx-auto px-[4vw] py-12 md:py-14">
          <p className="text-[11px] tracking-[0.2em] uppercase text-ivar-sage font-semibold mb-6">Our Commitments</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {COMMITMENTS.map((c) => (
              <div key={c.title} className="flex items-start gap-3">
                <span className="size-10 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0">
                  <LineIcon name={c.icon} size={17} stroke={1.6} />
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-white leading-tight mb-1">{c.title}</p>
                  <p className="text-[11.5px] text-white/55 leading-relaxed">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1500px] mx-auto px-[4vw] py-5 flex flex-col-reverse md:flex-row items-center justify-between gap-3 text-[11.5px] text-white/50">
          <p>© 2026 Ivar. All rights reserved.</p>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5">
            {legal.map(([label, href]) => (
              <Link key={label} href={href} className="hover:text-white transition-colors">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
