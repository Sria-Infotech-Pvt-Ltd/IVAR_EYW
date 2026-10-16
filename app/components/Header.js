"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import LineIcon from "./LineIcon";
import { WORKFORCE_ROLES } from "../data/workforceRoles";

const DATE_GO_PRODUCTS = [
  { href: "/product/62", label: "Date & Chocolate Protein Bites" },
  { href: "/product/63", label: "Mango Coconut Fruit Bites" },
  { href: "/product/64", label: "Millet Chocolate Bites" },
];

const MAKHANA_OPTIONS = [
  { href: "/makhana#flavoured", label: "Flavoured" },
  { href: "/makhana#weights", label: "Weights / Chips" },
];

const CORPORATE_EVENTS_OPTIONS = [
  { href: "/corporate-gifting", label: "Corporate Gifting" },
  { href: "/corporate-orders", label: "Corporate Food Supply" },
  { href: "/book-event", label: "Event Food & Refreshments" },
  { href: "/celebration-gifts", label: "Celebration & Wedding Gifts" },
  { href: "/bulk-orders", label: "Bulk & Custom Orders" },
];

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/shop",
    label: "Our Products",
    children: [
      { href: "/date-go", label: "Date Go", children: DATE_GO_PRODUCTS },
      { href: "/makhana", label: "Makhana", children: MAKHANA_OPTIONS },
    ],
  },
  {
    href: "/corporate-gifting",
    label: "Corporate & Events",
    children: CORPORATE_EVENTS_OPTIONS,
  },
  {
    href: "/workforce",
    label: "Workforce Solutions",
    children: WORKFORCE_ROLES.map((r) => ({ href: `/workforce/${r.slug}`, label: r.title })),
  },
  { href: "/packaging", label: "Custom Packaging" },
  { href: "/story", label: "About IVAR" },
  { href: "/contact", label: "Contact Us" },
];

// Kept for later — not linked from the navbar right now:
// { href: "/export", label: "Export" },
// { href: "/find-ivar", label: "Find Ivar" },
// { href: "/franchise", label: "Franchise" },
// { href: "/membership", label: "Membership" },
// { href: "/ingredients", label: "Ingredients" },
// { href: "/innovation", label: "Innovation" },

export default function Header() {
  const { count, openCart } = useCart();
  const router = useRouter();
  const pathname = usePathname();
  const activeHref = navLinks
    .map((l) => l.href)
    .filter((href) => pathname === href || pathname?.startsWith(`${href}/`))
    .sort((a, b) => b.length - a.length)[0];
  const isActive = (href) => href === activeHref;
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(null);
  const [mobileSubSubOpen, setMobileSubSubOpen] = useState(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function onSearch(e) {
    e.preventDefault();
    setMenuOpen(false);
    router.push(query.trim() ? `/shop?q=${encodeURIComponent(query.trim())}` : "/shop");
  }

  const searchForm = (
    <form onSubmit={onSearch} role="search" className="relative">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Ivar foods..."
        aria-label="Search Ivar foods"
        className="w-full h-10 rounded-full border border-[#dcd9cd] bg-white pl-4 pr-11 text-[13px] text-ivar-ink placeholder:text-[#9a9f9a]"
        suppressHydrationWarning
      />
      <button
        type="submit"
        aria-label="Search"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-ivar-forest cursor-pointer"
        suppressHydrationWarning
      >
        <LineIcon name="search" size={18} stroke={1.8} />
      </button>
    </form>
  );

  return (
    <>
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "bg-white/85 backdrop-blur-md border-ivar-forest/10" : "bg-white border-transparent"
      }`}
    >
      <div className="h-[68px] md:h-[72px] grid grid-cols-[auto_1fr_auto] items-center gap-4 px-[4vw] max-w-[1500px] mx-auto">
        <Link href="/" aria-label="Ivar home" className="shrink-0 h-10 md:h-12 w-[110px] md:w-[130px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo-wordmark.png" alt="Ivar" className="w-full h-full object-contain object-left" />
        </Link>

        <nav className="hidden 2xl:flex justify-center gap-3.5 2xl:gap-5 text-[12.5px] font-medium whitespace-nowrap">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <div key={link.label} className={link.children ? "relative group/nav" : "relative"}>
                <Link href={link.href} className="relative py-2 flex items-center gap-1">
                  <span className={`transition-colors duration-200 ${active ? "text-ivar-ink font-semibold" : "text-ivar-ink/70 hover:text-ivar-ink"}`}>
                    {link.label}
                  </span>
                  {link.children && (
                    <LineIcon
                      name="arrow"
                      size={10}
                      stroke={2.4}
                      className="rotate-90 text-ivar-ink/40 transition-transform group-hover/nav:-rotate-90"
                    />
                  )}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-ivar-forest"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </Link>

                {link.children && (
                  <div className="invisible opacity-0 translate-y-1 group-hover/nav:visible group-hover/nav:opacity-100 group-hover/nav:translate-y-0 transition-all duration-150 absolute left-0 top-full pt-2 z-50">
                    <div className="bg-white rounded-xl shadow-[0_12px_32px_rgba(11,53,31,0.14)] border border-ivar-forest/10 py-2 w-[230px]">
                      {link.children.map((child) => (
                        <div key={child.label} className={child.children ? "relative group/sub" : "relative"}>
                          <Link
                            href={child.href}
                            className="flex items-center justify-between gap-2 px-4 py-2.5 text-[13px] text-ivar-ink/75 hover:text-ivar-forest hover:bg-ivar-cream transition-colors"
                          >
                            {child.label}
                            {child.children && (
                              <LineIcon name="arrow" size={10} stroke={2.4} className="text-ivar-ink/40 shrink-0" />
                            )}
                          </Link>

                          {child.children && (
                            <div className="invisible opacity-0 translate-x-1 group-hover/sub:visible group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all duration-150 absolute left-full top-0 pl-2 z-50">
                              <div className="bg-white rounded-xl shadow-[0_12px_32px_rgba(11,53,31,0.14)] border border-ivar-forest/10 py-2 w-[240px]">
                                {child.children.map((grandchild) => (
                                  <Link
                                    key={grandchild.label}
                                    href={grandchild.href}
                                    className="block px-4 py-2.5 text-[13px] text-ivar-ink/75 hover:text-ivar-forest hover:bg-ivar-cream transition-colors"
                                  >
                                    {grandchild.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-4 xl:gap-5 justify-self-end">
          <div className="hidden 2xl:block w-[160px] 2xl:w-[200px]">{searchForm}</div>

          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Search"
            className="2xl:hidden shrink-0 text-ivar-forest cursor-pointer"
            suppressHydrationWarning
          >
            <LineIcon name="search" size={22} stroke={1.8} />
          </button>

          <Link href="/login" aria-label="Sign in" className="hidden sm:block shrink-0 text-ivar-forest">
            <LineIcon name="user" size={22} stroke={1.7} />
          </Link>

          <button
            onClick={openCart}
            aria-label="Open cart"
            className="relative shrink-0 text-ivar-forest cursor-pointer"
            suppressHydrationWarning
          >
            <LineIcon name="bag" size={24} stroke={1.7} />
            <span
              className="absolute -top-2 -right-2 bg-ivar-forest text-white rounded-full min-w-[17px] h-[17px] px-1 text-[10px] font-semibold flex items-center justify-center"
              suppressHydrationWarning
            >
              {count}
            </span>
          </button>

          <Link
            href="/shop"
            className="hidden 2xl:inline-flex shrink-0 items-center gap-2 bg-ivar-forest text-white text-[13px] font-semibold rounded-full px-5 py-2.5 hover:bg-ivar-forestDeep transition-colors group"
          >
            Explore Products <LineIcon name="arrow" size={16} stroke={2} className="transition-transform group-hover:translate-x-1" />
          </Link>

          <button
            className="2xl:hidden shrink-0 text-ivar-forest cursor-pointer"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            suppressHydrationWarning
          >
            <LineIcon name="menu" size={26} />
          </button>
        </div>
      </div>
    </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-0 right-0 bottom-0 w-[86vw] max-w-sm bg-white z-50 flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-[68px] border-b border-[#ece8da]">
                <div className="h-10 w-[110px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/logo-wordmark.png" alt="Ivar" className="w-full h-full object-contain object-left" />
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="text-ivar-forest cursor-pointer"
                  suppressHydrationWarning
                >
                  ✕
                </button>
              </div>

              <div className="px-6 pt-5">{searchForm}</div>

              <nav className="flex flex-col px-6 py-4 gap-1 text-[15px]">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    <div className="flex items-stretch border-b border-[#f0eee6]">
                      <Link
                        href={link.href}
                        className="flex-1 block py-3 text-ivar-ink/85 hover:text-ivar-forest"
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                      {link.children && (
                        <button
                          onClick={() => setMobileSubOpen((v) => (v === link.label ? null : link.label))}
                          aria-label={`Toggle ${link.label} submenu`}
                          aria-expanded={mobileSubOpen === link.label}
                          className="px-2 text-ivar-forest/60 cursor-pointer"
                          suppressHydrationWarning
                        >
                          <LineIcon
                            name="arrow"
                            size={12}
                            stroke={2.4}
                            className={`rotate-90 transition-transform ${mobileSubOpen === link.label ? "-rotate-90" : ""}`}
                          />
                        </button>
                      )}
                    </div>
                    {link.children && mobileSubOpen === link.label && (
                      <div className="flex flex-col pl-4 border-b border-[#f0eee6]">
                        {link.children.map((child) => (
                          <div key={child.label}>
                            <div className="flex items-stretch">
                              <Link
                                href={child.href}
                                className="flex-1 py-2.5 text-[13.5px] text-ivar-ink/65 hover:text-ivar-forest"
                                onClick={() => setMenuOpen(false)}
                              >
                                {child.label}
                              </Link>
                              {child.children && (
                                <button
                                  onClick={() => setMobileSubSubOpen((v) => (v === child.label ? null : child.label))}
                                  aria-label={`Toggle ${child.label} submenu`}
                                  aria-expanded={mobileSubSubOpen === child.label}
                                  className="px-2 text-ivar-forest/50 cursor-pointer"
                                  suppressHydrationWarning
                                >
                                  <LineIcon
                                    name="arrow"
                                    size={11}
                                    stroke={2.4}
                                    className={`rotate-90 transition-transform ${mobileSubSubOpen === child.label ? "-rotate-90" : ""}`}
                                  />
                                </button>
                              )}
                            </div>
                            {child.children && mobileSubSubOpen === child.label && (
                              <div className="flex flex-col pl-4">
                                {child.children.map((grandchild) => (
                                  <Link
                                    key={grandchild.label}
                                    href={grandchild.href}
                                    className="py-2 text-[13px] text-ivar-ink/55 hover:text-ivar-forest"
                                    onClick={() => setMenuOpen(false)}
                                  >
                                    {grandchild.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto px-6 pb-8 pt-4 flex flex-col gap-3">
                <Link
                  href="/shop"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex justify-center items-center gap-2 bg-ivar-forest text-white text-sm font-semibold rounded-full px-5 py-3"
                >
                  Explore Products <LineIcon name="arrow" size={16} stroke={2} />
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex justify-center items-center gap-2 border border-ivar-forest/40 text-ivar-forest text-sm font-semibold rounded-full px-5 py-3"
                >
                  Contact Us
                </Link>
                <Link
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex justify-center items-center gap-2 text-ivar-forest text-sm font-semibold py-2"
                >
                  Sign In / Register
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
