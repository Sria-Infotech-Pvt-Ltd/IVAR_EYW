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
  ["LinkedIn", "in"],
  ["Instagram", "ig"],
  ["YouTube", "yt"],
  ["Facebook", "f"],
];

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
            {socials.map(([label, glyph]) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="size-9 rounded-full border border-white/20 text-white text-[11px] font-bold flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                {glyph}
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
